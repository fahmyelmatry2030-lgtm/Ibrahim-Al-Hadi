import React from 'react';
import ContactForm from './ContactForm';
import './ContactSection.css';

const ContactSection = () => {

    return (
        <section className="contact-section section-padding" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info-side">
                        <h4 className="subtitle">تواصل معنا</h4>
                        <h2 className="section-title dark-bg">نحن هنا لمساعدتك والاستماع إليك</h2>
                        <p className="contact-description">
                            لا تتردد في التواصل معنا لحجز استشارة أو طرح أي استفسار قانوني. فريقنا متواجد دائمًا لتقديم الدعم اللازم.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon">📍</div>
                                <div>
                                    <h5>جمهورية مصر العربية</h5>
                                    <p>نخدم عملاءنا في جميع أنحاء مصر</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📞</div>
                                <div>
                                    <h5>للتواصل والاستفسار</h5>
                                    <p>تواصل معنا عبر صفحتنا على فيسبوك للرد السريع</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📘</div>
                                <div>
                                    <h5>صفحتنا على فيسبوك</h5>
                                    <p><a href="https://web.facebook.com/people/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D8%B9%D9%8A-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D9%87-%D9%85%D8%AA%D8%AE%D8%B5%D8%B5%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%A7%D9%84%D8%AC%D9%86%D8%A7%D8%A6%D9%8A%D9%87/100071430833738/" target="_blank" rel="noreferrer" style={{color: 'var(--primary-gold)', fontWeight: '700'}}>مؤسسة السباعي للمحاماة</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
