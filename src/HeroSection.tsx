"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";

type HeroProps = {
    /** When provided, clicking “Watch Demo” will trigger this instead of the alert fallback */
    onWatchDemo?: () => void;
};

export function HeroSection({ onWatchDemo }: HeroProps) {
    const handleStartLearning = () => {
        const target = document.getElementById("next-section");
        if (target) target.scrollIntoView({ behavior: "smooth" });
    };

    const handleWatchDemo = () => {
        if (onWatchDemo) return onWatchDemo();
        // Fallback if no handler is passed from App
        alert(
            "Demo video would play here!\n\nThis would typically open a platform overview video showing course previews, instructor introductions, and student success stories."
        );
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
            {/* Starfield background (behind blobs, above section bg) */}
            <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
                <Starfield />
            </div>

            {/* Animated gradient blobs (above stars, below content) */}
            <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight">
                        Master Design &amp; Animation
                        <br />
                        <span className="text-blue-400"> with LevelUp School</span>
                    </h1>
                    <br />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Transform your creative potential with industry-leading courses in UI/UX Design and 3D Animation.
                        Join thousands of professionals who've elevated their skills with our expert-crafted curriculum.
                    </p>
                    <br />
                    <br />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={handleStartLearning}
                            size="lg"
                            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl border-0 shadow-lg shadow-blue-500/25"
                        >
                            Start Learning Today
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={handleWatchDemo}
                            variant="outline"
                            size="lg"
                            className="group border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg rounded-xl bg-transparent"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 text-gray-500"
                >
                    <br />
                    <p className="text-sm">Trusted by 50,000+ designers and animators worldwide</p>
                </motion.div>
            </div>

            {/* Scroll indicator - also clickable */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => {
                    const target = document.getElementById("next-section");
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center hover:border-blue-400 transition-colors">
                    <motion.div
                        className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
