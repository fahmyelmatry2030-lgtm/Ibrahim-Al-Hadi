import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'محمد عبد الله',
            role: 'رجل أعمال',
            text: 'أفضل مكتب محاماة تعاملت معه في الإسكندرية. احترافية عالية وشفافية في كل خطوة من خطوات القضية.',
            rating: 5
        },
        {
            id: 2,
            name: 'سارة أحمد',
            role: 'عميلة',
            text: 'الأستاذ إبراهيم الهادي قمة في الذوق والتعاون. تم حل مشكلتي القانونية في وقت قياسي وبأفضل نتيجة ممكنة.',
            rating: 5
        },
        {
            id: 3,
            name: 'شركة الأفق للاستيراد',
            role: 'عميل شركات',
            text: 'نعتمد عليهم في جميع استشاراتنا القانونية وصياغة العقود. نثق بهم ثقة عمياء لما يقدمونه من دقة ومصداقية.',
            rating: 5
        }
    ];

    return (
        <section className="testimonials-section section-padding bg-light" id="testimonials">
            <div className="container">
                <div className="text-center reveal">
                    <h4 className="subtitle">آراء العملاء</h4>
                    <h2 className="section-title">ماذا يقول عملاؤنا عنا</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testi, idx) => (
                        <div className="testimonial-card reveal" key={testi.id} style={{ transitionDelay: `${idx * 0.1}s` }}>
                            <div className="stars">
                                {[...Array(testi.rating)].map((_, i) => (
                                    <span key={i}>⭐</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{testi.text}"</p>
                            <div className="testimonial-author">
                                <h4>{testi.name}</h4>
                                <span>{testi.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
