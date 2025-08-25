"use client";

import { useState, useCallback, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Box, Play } from "lucide-react";

// Mock ImageWithFallback component (replace with your actual component)
const ImageWithFallback = ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: CSSProperties }) => (
  <img src={src} alt={alt} className={className} style={style} />
);

// Mock VideoModal component (replace with your actual component)
const VideoModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  open ? (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
        <p>Video Modal Content</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null
);

export function SplitSection() {
    const [isUIVideoOpen, setIsUIVideoOpen] = useState(false);
    const [is3DVideoOpen, setIs3DVideoOpen] = useState(false);
    const r = useReducedMotion();

    const handleUILearnMore = useCallback(() => {
        alert("Redirecting to UI/UX Design course details...");
    }, []);
    
    const handle3DLearnMore = useCallback(() => {
        alert("Redirecting to 3D Animation course details...");
    }, []);

    const sectionStyles = {
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        minHeight: '100vh',
    };

    const containerStyles = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    };

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start',
    };

    const articleStyles = {
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        height: 'fit-content',
    };

    const headerStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
    };

    const iconContainerStyles = {
        width: '48px',
        height: '48px',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const h2Styles = {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#1e293b',
        margin: '0',
        background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const descriptionStyles = {
        fontSize: '1.125rem',
        lineHeight: '1.7',
        color: '#64748b',
        marginBottom: '24px',
    };

    const listStyles = {
        listStyle: 'none',
        padding: '0',
        margin: '0 0 32px 0',
    };

    const listItemStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px',
        fontSize: '1rem',
        color: '#475569',
        fontWeight: '500',
        position: 'relative' as const,
    };

    const bulletStyles = {
        width: '8px',
        height: '8px',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        borderRadius: '50%',
        flexShrink: 0,
    };

    const videoButtonStyles = {
        width: '100%',
        background: 'none',
        border: 'none',
        padding: '0',
        marginBottom: '32px',
        cursor: 'pointer',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
    };

    const videoCardStyles = {
        position: 'relative' as const,
        background: '#000',
        borderRadius: '16px',
        overflow: 'hidden',
        transform: 'translateZ(0)',
        willChange: 'transform',
    };

    const videoImageContainerStyles = {
        position: 'relative' as const,
        aspectRatio: '16/9',
        overflow: 'hidden',
    };

    const imageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        transition: 'all 0.3s ease',
        display: 'block',
        backfaceVisibility: 'hidden' as const,
        WebkitBackfaceVisibility: 'hidden' as const,
    };

    const liveTagStyles = {
        position: 'absolute' as const,
        top: '16px',
        left: '16px',
        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
        color: 'white',
        padding: '6px 12px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px',
        zIndex: 2,
        animation: 'pulse 2s infinite',
    };

    const progressBarStyles = {
        position: 'absolute' as const,
        bottom: '60px',
        left: '16px',
        right: '16px',
        height: '4px',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '2px',
        overflow: 'hidden',
    };

    const progressFillStyles = {
        height: '100%',
        width: '40%',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
        borderRadius: '2px',
        animation: 'progressMove 3s ease-in-out infinite',
    };

    const playButtonStyles = {
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    };

    const captionStyles = {
        position: 'absolute' as const,
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
        color: 'white',
        padding: '20px 16px 16px',
    };

    const captionTitleStyles = {
        fontSize: '1rem',
        fontWeight: '600',
        margin: '0 0 4px 0',
    };

    const captionSubtitleStyles = {
        fontSize: '0.875rem',
        opacity: 0.8,
        margin: '0',
    };

    const ctaButtonStyles = {
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        border: 'none',
        padding: '14px 28px',
        borderRadius: '12px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
        width: '100%',
    };

    const responsiveStyles = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        
        @keyframes progressMove {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        
        @media (max-width: 768px) {
            .split-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
            }
            
            .split-article {
                padding: 24px !important;
            }
            
            .split-section {
                padding: 40px 0 !important;
            }
        }
    `;

    return (
        <>
            <style>{responsiveStyles}</style>
            <section id="next-section" aria-label="Courses" style={sectionStyles} className="split-section">
                <div style={containerStyles}>
                    <div style={gridStyles} className="split-grid">
                        {/* UI/UX Design */}
                        <motion.article
                            style={articleStyles}
                            className="split-article"
                            initial={r ? false : { opacity: 0, y: 20 }}
                            whileInView={r ? {} : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)' }}
                        >
                            <div>
                                {/* Header */}
                                <div style={headerStyles}>
                                    <div style={iconContainerStyles}>
                                        <Monitor size={24} color="#3b82f6" />
                                    </div>
                                    <h2 style={h2Styles}>UI/UX Design</h2>
                                </div>

                                {/* Description */}
                                <p style={descriptionStyles}>
                                    Master the art of creating intuitive, beautiful interfaces. Learn
                                    industry‑standard tools, design systems, and user research
                                    methodologies from experienced professionals.
                                </p>

                                {/* Feature List */}
                                <ul style={listStyles}>
                                    {[
                                        "Figma & Adobe Creative Suite",
                                        "User Research & Testing",
                                        "Design Systems & Prototyping",
                                    ].map((text) => (
                                        <li key={text} style={listItemStyles}>
                                            <div style={bulletStyles}></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                {/* Video Preview */}
                                <motion.button
                                    type="button"
                                    onClick={() => setIsUIVideoOpen(true)}
                                    aria-label="Play UI/UX Design masterclass preview"
                                    style={videoButtonStyles}
                                    initial={r ? false : { opacity: 0, scale: 0.98 }}
                                    whileInView={r ? {} : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div style={videoCardStyles}>
                                        <div style={videoImageContainerStyles}>
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1700887937204-69f8b8400ace?auto=format&fit=crop&w=1200&q=80"
                                                alt="UI/UX Design Course Preview"
                                                style={imageStyles}
                                            />

                                            <div style={liveTagStyles}>LIVE</div>

                                            {!r && (
                                                <div style={progressBarStyles}>
                                                    <div style={progressFillStyles}></div>
                                                </div>
                                            )}

                                            <div style={playButtonStyles}>
                                                <Play size={24} fill="#3b82f6" color="#3b82f6" />
                                            </div>

                                            <div style={captionStyles}>
                                                <p style={captionTitleStyles}>UI/UX Design Masterclass Preview</p>
                                                <p style={captionSubtitleStyles}>Click to watch full demo</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>

                                {/* CTA Button */}
                                <button 
                                    type="button" 
                                    onClick={handleUILearnMore}
                                    style={ctaButtonStyles}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)';
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </motion.article>

                        {/* 3D Animation */}
                        <motion.article
                            style={articleStyles}
                            className="split-article"
                            initial={r ? false : { opacity: 0, y: 20 }}
                            whileInView={r ? {} : { opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)' }}
                        >
                            <div>
                                {/* Header */}
                                <div style={headerStyles}>
                                    <div style={iconContainerStyles}>
                                        <Box size={24} color="#3b82f6" />
                                    </div>
                                    <h2 style={h2Styles}>3D Animation</h2>
                                </div>

                                {/* Description */}
                                <p style={descriptionStyles}>
                                    Bring your imagination to life with cutting‑edge 3D animation techniques.
                                    Master industry‑standard software and create stunning visual experiences.
                                </p>

                                {/* Feature List */}
                                <ul style={listStyles}>
                                    {[
                                        "Blender & Cinema 4D",
                                        "Character Animation & Rigging",
                                        "VFX & Motion Graphics",
                                    ].map((text) => (
                                        <li key={text} style={listItemStyles}>
                                            <div style={bulletStyles}></div>
                                            {text}
                                        </li>
                                    ))}
                                </ul>

                                {/* Video Preview */}
                                <motion.button
                                    type="button"
                                    onClick={() => setIs3DVideoOpen(true)}
                                    aria-label="Play 3D Animation workshop preview"
                                    style={videoButtonStyles}
                                    initial={r ? false : { opacity: 0, scale: 0.98 }}
                                    whileInView={r ? {} : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div style={videoCardStyles}>
                                        <div style={videoImageContainerStyles}>
                                            <ImageWithFallback
                                                src="https://images.unsplash.com/photo-1668405841055-f25e740e4a14?auto=format&fit=crop&w=1200&q=80"
                                                alt="3D Animation Course Preview"
                                                style={imageStyles}
                                            />

                                            <div style={liveTagStyles}>LIVE</div>

                                            {!r && (
                                                <div style={progressBarStyles}>
                                                    <div style={progressFillStyles}></div>
                                                </div>
                                            )}

                                            <div style={playButtonStyles}>
                                                <Play size={24} fill="#3b82f6" color="#3b82f6" />
                                            </div>

                                            <div style={captionStyles}>
                                                <p style={captionTitleStyles}>3D Animation Workshop Preview</p>
                                                <p style={captionSubtitleStyles}>Click to watch full demo</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>

                                {/* CTA Button */}
                                <button 
                                    type="button" 
                                    onClick={handle3DLearnMore}
                                    style={ctaButtonStyles}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)';
                                    }}
                                >
                                    Learn More
                                </button>
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* Video Modals */}
            <VideoModal
                open={isUIVideoOpen}
                onClose={() => setIsUIVideoOpen(false)}
            />
            <VideoModal
                open={is3DVideoOpen}
                onClose={() => setIs3DVideoOpen(false)}
            />
        </>
    );
}