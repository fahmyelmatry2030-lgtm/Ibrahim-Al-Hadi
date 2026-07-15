import React, { useEffect } from 'react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="page-container">
            <div className="page-header" style={{
                backgroundColor: 'var(--primary-navy)',
                padding: '120px 0 60px',
                textAlign: 'center',
                color: 'white',
                borderBottom: '4px solid var(--primary-gold)'
            }}>
                <div className="container reveal">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>الأسئلة الشائعة</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        إجابات وافية لأكثر الاستفسارات القانونية والإدارية التي تصلنا من عملائنا.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-light">
                <div className="container reveal">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <FAQAccordion />
                    </div>
                </div>
            </section>
            
            <CTASection />
        </div>
    );
};

export default FAQPage;
