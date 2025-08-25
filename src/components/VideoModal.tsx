// src/components/VideoModal.tsx
import { useEffect } from "react";

export default function VideoModal({
                                       open,
                                       onClose,
                                       videoId = "dQw4w9WgXcQ",
                                   }: {
    open: boolean;
    onClose: () => void;
    videoId?: string;
}) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative aspect-video w-full">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title="Course preview"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                    <p className="text-sm text-white/70">Playing preview…</p>
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
