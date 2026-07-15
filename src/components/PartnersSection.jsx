import React from 'react';

const PartnersSection = () => {
    const partners = [
        { id: 1, name: 'بنك مصر', icon: '🏛️' },
        { id: 2, name: 'شركة الأهلي العقارية', icon: '🏢' },
        { id: 3, name: 'نقابة المحامين', icon: '⚖️' },
        { id: 4, name: 'شركة الأفق للاستيراد', icon: '🛳️' },
        { id: 5, name: 'مصانع العز', icon: '🏭' },
        { id: 6, name: 'مجموعة النور القابضة', icon: '📈' }
    ];

    return (
        <section className="partners-section section-padding" style={{ backgroundColor: 'var(--primary-navy)', color: 'white', borderTop: '4px solid var(--primary-gold)' }}>
            <div className="container text-center reveal">
                <h4 className="subtitle" style={{ color: 'var(--primary-gold)' }}>شركاء النجاح</h4>
                <h2 className="section-title" style={{ color: 'white', marginBottom: '40px' }}>عملاء نعتز بثقتهم</h2>
                
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '40px'
                }}>
                    {partners.map((partner, idx) => (
                        <div key={partner.id} className="reveal" style={{ transitionDelay: `${idx * 0.1}s`, textAlign: 'center' }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '10px',
                                background: 'rgba(255,255,255,0.05)',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                                border: '1px solid rgba(201,169,110,0.3)'
                            }}>
                                {partner.icon}
                            </div>
                            <h4 style={{ fontSize: '1.1rem', color: '#E2E8F0' }}>{partner.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
