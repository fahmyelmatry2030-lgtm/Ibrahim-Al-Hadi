import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section section-padding" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img
                                src="/saif_al_sibai.jpg"
                                alt="الأستاذ سيف العمدة السباعي"
                            />
                            <div className="experience-badge">
                                <span className="years">+10</span>
                                <span className="text">سنوات من<br />التميز</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <h4 className="subtitle">من نحن</h4>
                        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>متخصصون في حمايتك والدفاع عن حقوقك</h2>
                        <p className="lead-text">
                            مؤسسة السباعي للمحاماة والاستشارات القانونية صرح قانوني رائد متخصص في القضايا الجنائية، تأسس على مبادئ النزاهة، الشفافية، والتفاني المطلق في خدمة عملائنا.
                        </p>
                        <p className="description">
                            يقود المؤسسة الأستاذ سيف العمدة السباعي، المتخصص في القضايا الجنائية بخبرة واسعة ومتراكمة أمام كافة محاكم جمهورية مصر العربية. نقدم لك الدعم القانوني الشامل باحترافية عالية واستراتيجية دفاعية متميزة تضمن لك أفضل النتائج.
                        </p>

                        <div className="core-values">
                            <div className="value-item">
                                <div className="value-icon">⚖️</div>
                                <div className="value-text">
                                    <h5>النزاهة والشفافية</h5>
                                    <p>نعمل بوضوح تام مع عملائنا في كل خطوة.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">🛡️</div>
                                <div className="value-text">
                                    <h5>الاحترافية العالية</h5>
                                    <p>دفاع صلب وحلول قانونية مبنية على دراسة عميقة.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
