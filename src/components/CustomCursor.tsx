"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
    "a,button,[role='button'],input,select,textarea,summary,.cursor-grow";

export default function CustomCursor() {
    // Motion values/springs (hooks always run in the same order)
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const springX = useSpring(x, { stiffness: 450, damping: 40, mass: 0.6 });
    const springY = useSpring(y, { stiffness: 450, damping: 40, mass: 0.6 });
    const scale   = useSpring(1, { stiffness: 400, damping: 35, mass: 0.6 });

    // Enable only on fine pointers (no conditional hook returns)
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const mq = window.matchMedia("(pointer: fine)");
        const apply = () => setEnabled(mq.matches);
        apply();
        mq.addEventListener?.("change", apply);
        return () => mq.removeEventListener?.("change", apply);
    }, []);

    // Listeners only when enabled
    useEffect(() => {
        if (!enabled) return;

        const onMove = (e: PointerEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        const onOver = (e: Event) => {
            const t = e.target as Element | null;
            scale.set(t && t.closest(INTERACTIVE_SELECTOR) ? 1.25 : 1);
        };
        const onDown = () => scale.set(0.95);
        const onUp   = () => scale.set(1.25);

        window.addEventListener("pointermove", onMove, { passive: true });
        document.addEventListener("pointerover", onOver, { passive: true });
        document.addEventListener("pointerdown", onDown, { passive: true });
        document.addEventListener("pointerup", onUp, { passive: true });

        return () => {
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerover", onOver);
            document.removeEventListener("pointerdown", onDown);
            document.removeEventListener("pointerup", onUp);
        };
    }, [enabled, scale, x, y]);

    // Hide when not enabled (keeps hooks order intact)
    const hidden = enabled ? {} : { display: "none" as const };

    return (
        <>
            {/* Outer ring */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed z-[100] aspect-square w-8 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    scale,
                    filter: "drop-shadow(0 0 10px rgba(99,102,241,0.25))",
                    ...hidden,
                }}
            >
                <span className="block h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(167,139,250,0.65),rgba(139,92,246,0.08))]" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-purple-400/40" />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed z-[101] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
                style={{ x: springX, y: springY, background: "rgb(167 139 250)", ...hidden }}
            />
        </>
    );
}
