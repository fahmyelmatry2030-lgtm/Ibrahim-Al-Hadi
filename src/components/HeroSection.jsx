import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const openBooking = () => {
        window.dispatchEvent(new CustomEvent('openBookingModal'));
    };

    return (
        <section className="hero-premium" id="home">
            <div className="hero-premium-bg"></div>
            
            <div className="container">
                <div className="hero-premium-grid">
                    
                    {/* Content Side (Right in RTL) */}
                    <div className="hero-premium-content">
                        <div className="hero-premium-badge">
                            <span className="pulse-dot"></span>
                            مؤسسة إبراهيم الهادي للمحاماة والاستشارات القانونية
                        </div>

                        <h1 className="hero-premium-title">
                            الريادة في تقديم 
                            <span className="gold-text-gradient">الحلول القانونية المتكاملة</span>
                        </h1>

                        <p className="hero-premium-subtitle">
                            نلتزم بتقديم تمثيل قانوني استثنائي ودفاع رصين لحماية مصالح عملائنا، مستندين إلى خبرات متراكمة واحترافية عالية أمام كافة درجات التقاضي في جمهورية مصر العربية.
                        </p>

                        <div className="hero-premium-actions">
                            <button onClick={openBooking} className="btn-premium-primary">
                                احجز استشارتك الآن <span className="arrow">←</span>
                            </button>
                            <div className="hero-premium-support">
                                <div className="support-icon">📞</div>
                                <div>
                                    <span className="support-label">دعم قانوني طارئ ٢٤/٧</span>
                                    <span className="support-number">010 1234 5678</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual / Stats Side (Left in RTL) */}
                    <div className="hero-premium-visual">
                        <div className="glass-card main-stat-card">
                            <div className="stat-header">
                                <div className="stat-icon">⚖️</div>
                                <div>
                                    <h4>نسبة النجاح</h4>
                                    <p>في القضايا المعقدة</p>
                                </div>
                            </div>
                            <div className="stat-body">
                                <h2>٩٨<span>٪</span></h2>
                                <div className="progress-bar-container">
                                    <div className="progress-bar-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card secondary-stat-card card-1">
                            <h3>+٥٠٠</h3>
                            <p>قضية تم كسبها</p>
                        </div>

                        <div className="glass-card secondary-stat-card card-2">
                            <h3>+١٠</h3>
                            <p>سنوات خبرة</p>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="hero-glow shape-1"></div>
                        <div className="hero-glow shape-2"></div>
                    </div>
                </div>
            </div>

            <div className="hero-premium-bottom-bar">
                <div className="container">
                    <div className="trusted-by">
                        <span>موثوقون من قبل:</span>
                        <div className="trusted-logos">
                            <span>بنك مصر</span>
                            <span className="separator">•</span>
                            <span>النقابة العامة</span>
                            <span className="separator">•</span>
                            <span>شركات استثمارية</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
