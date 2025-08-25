"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import { HeroSection } from "@/HeroSection";
import VideoModal from "@/components/VideoModal";
import { SplitSection } from "@/components/SplitSection";
import BenefitsSection from "@/components/BenefitsSection";
import FooterSection from "@/components/FooterSection";

export default function App() {
    const [open, setOpen] = useState(false);
    const [videoId, setVideoId] = useState<string>("dQw4w9WgXcQ");

    return (
        <div className="min-h-screen supports-[pointer:fine]:cursor-none bg-black flex flex-col">
            {/* Mount the custom cursor ONCE at root */}
            <CustomCursor />

            {/* Main content */}
            <main className="flex-grow">
                <HeroSection
                    onWatchDemo={() => {
                        setVideoId("dQw4w9WgXcQ");
                        setOpen(true);
                    }}
                />

                <SplitSection />
                <BenefitsSection />
            </main>

            {/* Footer */}
            <FooterSection />

            {/* Global video modal */}
            <VideoModal open={open} onClose={() => setOpen(false)} videoId={videoId} />
        </div>
    );
}
