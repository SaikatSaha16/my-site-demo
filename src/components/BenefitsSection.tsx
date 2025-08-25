"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Users, Award, Clock, Zap, Globe, BookOpen } from "lucide-react";
import Starfield from "@/components/Starfield";
import type { ComponentType } from "react";

// Mock Card component (replace with your actual UI card)
const Card = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

type Benefit = {
    icon: ComponentType<{ className?: string; size?: number }>;
    title: string;
    description: string;
    color: "blue" | "purple";
};

const benefits: Benefit[] = [
    {
        icon: Users,
        title: "Expert Instructors",
        description: "Learn from industry professionals with years of real-world experience at top companies.",
        color: "blue",
    },
    {
        icon: Award,
        title: "Industry Certification",
        description: "Earn recognized certificates that boost your portfolio and career prospects.",
        color: "purple",
    },
    {
        icon: Clock,
        title: "Flexible Learning",
        description: "Study at your own pace with lifetime access to all course materials and updates.",
        color: "blue",
    },
    {
        icon: Zap,
        title: "Hands-on Projects",
        description: "Build real portfolio pieces while learning through practical, project-based curriculum.",
        color: "purple",
    },
    {
        icon: Globe,
        title: "Global Community",
        description: "Connect with 50,000+ students and professionals in our vibrant learning community.",
        color: "blue",
    },
    {
        icon: BookOpen,
        title: "Latest Techniques",
        description: "Stay current with the latest design trends, tools, and animation technologies.",
        color: "purple",
    },
];

export default function BenefitsSection() {
    const prefersReducedMotion = useReducedMotion();

    const sectionStyles = {
        position: 'relative' as const,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #3b0764 100%)',
        padding: '100px 0',
        minHeight: '100vh',
    };

    const containerStyles = {
        position: 'relative' as const,
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    };

    const absoluteLayer = {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none' as const,
        zIndex: 0,
    };

    const headerStyles = {
        textAlign: 'center' as const,
        marginBottom: '80px',
    };

    const titleStyles = {
        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
        fontWeight: '700',
        lineHeight: '1.1',
        marginBottom: '24px',
    };

    const whiteTextStyles = {
        color: '#ffffff',
        display: 'block',
    };

    const blueTextStyles = {
        color: '#4a90e2',
        display: 'block',
    };

    const subtitleStyles = {
        fontSize: '1.125rem',
        color: '#a0a0a0',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto',
    };

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
    };

    const cardStyles = (isBlue: boolean) => ({
        backgroundColor: isBlue ? '#1a2332' : '#2a1a32',
        borderRadius: '16px',
        padding: '32px 24px',
        border: '1px solid',
        borderColor: isBlue ? '#2a3442' : '#3a2a42',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
    });

    const iconContainerStyles = (isBlue: boolean) => ({
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: isBlue ? '#2a3d52' : '#4a2d52',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px',
        transition: 'all 0.3s ease',
    });

    const cardTitleStyles = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '12px',
        lineHeight: '1.3',
    };

    const cardDescriptionStyles = {
        fontSize: '0.95rem',
        color: '#a0a0a0',
        lineHeight: '1.5',
        flex: 1,
    };

    const responsiveStyles = `
        .benefits-card:hover {
            transform: translateY(-4px);
        }
        
        .benefits-card:hover .icon-container {
            transform: scale(1.1);
        }
        
        .benefits-card:hover .card-title {
            color: #4a90e2;
        }
        
        @media (max-width: 1024px) {
            .benefits-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 20px !important;
            }
        }
        
        @media (max-width: 640px) {
            .benefits-grid {
                grid-template-columns: 1fr !important;
                gap: 16px !important;
            }
            
            .benefits-card {
                padding: 24px 20px !important;
            }
        }
    `;

    return (
        <>
            <style>{responsiveStyles}</style>
            <section style={sectionStyles}>
                {/* Starfield background + soft blobs like HeroSection */}
                <div style={absoluteLayer} aria-hidden>
                    <Starfield />
                </div>
                {!prefersReducedMotion && (
                    <div style={absoluteLayer} aria-hidden>
                        <motion.div
                            style={{ position: 'absolute', top: '15%', left: '12%', width: 280, height: 280, background: 'rgba(59,130,246,0.12)', borderRadius: '9999px', filter: 'blur(40px)' }}
                            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            style={{ position: 'absolute', bottom: '12%', right: '12%', width: 360, height: 360, background: 'rgba(168,85,247,0.12)', borderRadius: '9999px', filter: 'blur(48px)' }}
                            animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.35, 0.6, 0.35] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                )}
                <div style={containerStyles}>
                    {/* Header */}
                    <motion.div
                        style={headerStyles}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={titleStyles}>
                            <span style={whiteTextStyles}>Why Choose</span>
                            <span style={blueTextStyles}>LevelUp School?</span>
                        </h2>
                        <p style={subtitleStyles}>
                            Join the most comprehensive design and animation learning platform, 
                            trusted by professionals worldwide to advance their creative careers.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div style={gridStyles} className="benefits-grid">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            const isBlue = benefit.color === "blue";

                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.1,
                                        ease: "easeOut" 
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <Card 
                                        style={cardStyles(isBlue)}
                                        className="benefits-card"
                                    >
                                        <div 
                                            style={iconContainerStyles(isBlue)}
                                            className="icon-container"
                                        >
                                            <div style={{ color: isBlue ? '#4a90e2' : '#9d4edd' }}>
                                                <Icon size={24} />
                                            </div>
                                        </div>

                                        <h3 style={cardTitleStyles} className="card-title">
                                            {benefit.title}
                                        </h3>

                                        <p style={cardDescriptionStyles}>
                                            {benefit.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}