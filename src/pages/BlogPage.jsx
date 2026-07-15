import React, { useEffect } from 'react';
import CTASection from '../components/CTASection';

const BlogPage = () => {
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

    const articles = [
        {
            id: 1,
            title: 'التعديلات الجديدة على قانون الإجراءات الجنائية 2026',
            date: '15 يوليو 2026',
            category: 'تحديثات القوانين',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
            excerpt: 'تعرف على أبرز التعديلات التي طرأت مؤخراً على قانون الإجراءات الجنائية وكيف تؤثر على حقوق المتهمين.'
        },
        {
            id: 2,
            title: 'دليلك الشامل لتأسيس شركة ذات مسئولية محدودة',
            date: '10 يوليو 2026',
            category: 'قضايا الشركات',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
            excerpt: 'خطوة بخطوة، نستعرض الأوراق والمستندات المطلوبة لتأسيس شركتك الجديدة وفقاً لقانون الاستثمار.'
        },
        {
            id: 3,
            title: 'كيف تحمي حقوقك العمالية عند الفصل التعسفي؟',
            date: '05 يوليو 2026',
            category: 'مقالات قانونية',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80',
            excerpt: 'نصائح ذهبية لكل عامل أو موظف يواجه تعسفاً من صاحب العمل وكيفية المطالبة بالتعويض المادي.'
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
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>المدونة القانونية</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        مقالات، أخبار، وتحديثات قانونية تهمك في كافة فروع القانون.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="grid-3-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {articles.map((article, idx) => (
                            <div key={article.id} className="reveal" style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transitionDelay: `${idx * 0.1}s` }}>
                                <img src={article.image} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                <div style={{ padding: '25px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '0.85rem' }}>
                                        <span style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>{article.category}</span>
                                        <span style={{ color: '#888' }}>{article.date}</span>
                                    </div>
                                    <h3 style={{ color: 'var(--primary-navy)', marginBottom: '15px', fontSize: '1.3rem' }}>{article.title}</h3>
                                    <p style={{ color: 'var(--text-gray)', lineHeight: '1.7', marginBottom: '20px' }}>{article.excerpt}</p>
                                    <button style={{ background: 'none', border: 'none', color: 'var(--primary-navy)', fontWeight: 'bold', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>
                                        اقرأ المزيد ←
                                    </button>
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

export default BlogPage;
