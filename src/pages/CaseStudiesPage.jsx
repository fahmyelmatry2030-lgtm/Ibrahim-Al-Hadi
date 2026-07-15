import React, { useEffect } from 'react';
import CTASection from '../components/CTASection';

const CaseStudiesPage = () => {
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

    const cases = [
        {
            id: 1,
            title: 'استرداد حقوق عمالية لـ 50 عاملاً',
            category: 'قضايا عمالية',
            result: 'نجاح باهر',
            summary: 'نجح المكتب في تمثيل مجموعة من العمال ضد شركة كبرى تعسفت في فصلهم، وتم استرداد كافة مستحقاتهم المتأخرة والتعويض عن الفصل التعسفي.',
            lessons: 'أهمية توثيق عقود العمل والاحتفاظ بنسخ منها والمطالبة بالحقوق فوراً وعدم التأخير.'
        },
        {
            id: 2,
            title: 'إثبات براءة في قضية تزوير معقدة',
            category: 'قضايا جنائية',
            result: 'براءة',
            summary: 'تم توجيه تهم تزوير مستندات رسمية لعميلنا، وبعد فحص دقيق من خبراء التزييف وتقديم دفوع قانونية محكمة، تم إثبات البراءة بالكامل.',
            lessons: 'الاعتماد على التقارير الفنية المتخصصة والطعن في الإجراءات الشكلية للقبض والتفتيش.'
        },
        {
            id: 3,
            title: 'حكم نهائي بنفقة شاملة',
            category: 'أحوال شخصية',
            result: 'حكم نهائي',
            summary: 'حصلنا على حكم نهائي بإلزام الزوج بنفقة زوجية وأجر مسكن ومصاريف تعليم للأبناء بما يتناسب مع دخله الحقيقي الذي حاول إخفاءه.',
            lessons: 'التحري الدقيق عن مصادر دخل الخصم وتقديم المستندات الدالة على يسار الحال.'
        }
    ];

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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>القضايا والنجاحات</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        نستعرض هنا بعضاً من نجاحاتنا وإنجازاتنا القانونية دون الكشف عن بيانات عملائنا حفاظاً على السرية.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {cases.map((c, idx) => (
                            <div key={c.id} className="reveal" style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transitionDelay: `${idx * 0.1}s`, borderTop: '4px solid var(--primary-navy)' }}>
                                <span style={{ backgroundColor: 'var(--primary-gold)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>{c.category}</span>
                                <h3 style={{ color: 'var(--primary-navy)', marginTop: '20px', marginBottom: '15px' }}>{c.title}</h3>
                                <p style={{ color: 'var(--text-gray)', lineHeight: '1.7', marginBottom: '20px' }}>{c.summary}</p>
                                
                                <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                                    <h5 style={{ color: 'var(--primary-gold)', marginBottom: '10px' }}>النتيجة: <span style={{ color: 'var(--primary-navy)' }}>{c.result}</span></h5>
                                    <p style={{ fontSize: '0.9rem', color: '#666' }}><strong>الدروس المستفادة:</strong> {c.lessons}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CTASection />
        </div>
    );
};

export default CaseStudiesPage;
