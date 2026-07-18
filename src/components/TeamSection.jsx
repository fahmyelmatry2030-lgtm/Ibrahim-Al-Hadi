import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const team = [
        {
            id: 1,
            name: 'سيف العمدة السباعي',
            role: 'مؤسس المكتب - متخصص في القضايا الجنائية',
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80'
        },
        {
            id: 2,
            name: 'د. خالد عبد الرحمن',
            role: 'مستشار قانوني - قضايا الشركات',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
        },
        {
            id: 3,
            name: 'سارة مصطفى',
            role: 'محامية استئناف - أحوال شخصية',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
        },
        {
            id: 4,
            name: 'طارق الدسوقي',
            role: 'خبير التحكيم التجاري',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <section className="team-section section-padding" id="team">
            <div className="container">
                <div className="text-center">
                    <h4 className="subtitle">نخبة من الخبراء</h4>
                    <h2 className="section-title">فريق العمل</h2>
                    <p className="section-description">
                        نفخر بوجود نخبة من أكفأ المحامين والمستشارين القانونيين الملتزمين بتحقيق أفضل النتائج لعملائنا.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member) => (
                        <div className="team-card" key={member.id}>
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-social">
                                    <a href="#">in</a>
                                    <a href="#">x</a>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                                <button 
                                    onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal', { detail: { lawyer: member.name } }))}
                                    style={{
                                        marginTop: '10px',
                                        padding: '8px 16px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid var(--primary-gold)',
                                        color: 'var(--primary-gold)',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        width: '100%',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={(e) => { e.target.style.backgroundColor = 'var(--primary-gold)'; e.target.style.color = 'var(--white)'; }}
                                    onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'var(--primary-gold)'; }}
                                >
                                    حجز استشارة مع {member.name.split(' ')[0]}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
