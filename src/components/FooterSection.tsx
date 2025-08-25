"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowRight, Sparkles, Heart, ExternalLink } from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
           <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
                <br />
                <br />
                <br />
            </div>
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
                
                {/* Gradient orbs */}
                <motion.div
                    className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1], 
                        opacity: [0.3, 0.5, 0.3] 
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.1, 0.9, 1.1], 
                        opacity: [0.2, 0.4, 0.2] 
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-28">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
                                <Sparkles className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Design & Animation
                            </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Helping creators master UI/UX and 3D animation with hands-on courses, expert mentors, and a vibrant community.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Github, label: "GitHub", href: "#" },
                                { icon: Twitter, label: "Twitter", href: "#" },
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Mail, label: "Email", href: "mailto:hello@example.com" }
                            ].map(({ icon: Icon, label, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Courses', 'Pricing', 'Community', 'FAQs', 'About Us'].map((link) => (
                                <li key={link}>
                                    <a 
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group" 
                                        href="#"
                                    >
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-purple-400" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
                        <ul className="space-y-3">
                            {['Blog', 'Tutorials', 'Documentation', 'Changelog', 'Support', 'Downloads'].map((link) => (
                                <li key={link}>
                                    <a 
                                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group" 
                                        href="#"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 text-blue-400" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
                        
                        {/* Newsletter */}
                        <div className="mb-6">
                            <p className="text-gray-400 text-sm mb-4">
                                Get course updates and design tips
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
                                />
                                <motion.button
                                    className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-purple-500/25 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span>Remote / Worldwide</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-4 h-4 text-purple-400" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-pink-400" />
                                <span>hello@designanimation.com</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div 
                    className="border-t border-white/10 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>© {new Date().getFullYear()} Design & Animation. All rights reserved.</span>
                            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Cookies
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}