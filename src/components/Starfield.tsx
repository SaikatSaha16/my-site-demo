"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const raf = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let w = (canvas.width = canvas.offsetWidth);
        let h = (canvas.height = canvas.offsetHeight);

        const onResize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };
        window.addEventListener("resize", onResize);

        const count = Math.floor((w * h) / 9000);
        const stars = Array.from({ length: count }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            z: Math.random() * 0.7 + 0.3,
            r: Math.random() * 1.2 + 0.3,
        }));

        const tick = () => {
            ctx.clearRect(0, 0, w, h);
            for (const s of stars) {
                s.x += s.z * 0.25;
                s.y += s.z * 0.12;
                if (s.x > w) s.x = 0;
                if (s.y > h) s.y = 0;

                ctx.globalAlpha = 0.8 * s.z;
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            }
            raf.current = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full block" />;
}
