import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const areas = [
        { id: 1, title: 'القضايا المدنية', icon: '⚖️', description: 'خبرة واسعة في التقاضي المدني والمنازعات بين الأفراد والشركات والمطالبات المالية.' },
        { id: 2, title: 'القضايا الجنائية', icon: '🛡️', description: 'دفاع قوي وصلب في كافة القضايا الجنائية ومحاكم الجنايات على مستوى الجمهورية.' },
        { id: 3, title: 'قضايا الأسرة', icon: '👨‍👩‍👧‍👦', description: 'التعامل مع قضايا الأحوال الشخصية، النفقات، الطلاق، والمواريث بسرية واحترافية.' },
        { id: 4, title: 'قضايا الشركات', icon: '📈', description: 'تقديم الدعم القانوني للشركات وصياغة العقود التجارية وتمثيلها أمام المحاكم.' },
        { id: 5, title: 'العقارات', icon: '🏠', description: 'التعامل مع نزاعات الإيجار، تسجيل العقارات، ومنازعات الملكية العقارية.' },
        { id: 6, title: 'القضايا العمالية', icon: '👷', description: 'تمثيل العمال وأصحاب العمل في منازعات العمل والفصل التعسفي والتعويضات.' },
        { id: 7, title: 'الملكية الفكرية', icon: '💡', description: 'تسجيل العلامات التجارية، براءات الاختراع، وحماية حقوق المؤلف من الانتهاكات.' },
        { id: 8, title: 'التحكيم', icon: '🤝', description: 'فض المنازعات بطرق التحكيم التجاري المحلي والدولي بعيداً عن ساحات المحاكم.' },
        { id: 9, title: 'تأسيس الشركات', icon: '🏢', description: 'استخراج السجلات التجارية وتأسيس كافة أنواع الشركات والتعامل مع هيئة الاستثمار.' },
        { id: 10, title: 'الاستشارات القانونية', icon: '📚', description: 'تقديم استشارات قانونية دقيقة ومكتوبة في كافة فروع القانون للأفراد والشركات.' }
    ];

    return (
        <section className="practice-areas section-padding" id="practice-areas">
            <div className="container">
                <div className="text-center">
                    <h4 className="subtitle">خدماتنا القانونية</h4>
                    <h2 className="section-title">مجالات التخصص</h2>
                    <p className="section-description">
                        نغطي مجموعة واسعة من المجالات القانونية بخبرة واحترافية لتلبية كافة احتياجات عملائنا.
                    </p>
                </div>

                <div className="areas-grid">
                    {areas.map((area) => (
                        <div className="area-card" key={area.id}>
                            <div className="area-icon">{area.icon}</div>
                            <h3 className="area-title">{area.title}</h3>
                            <p className="area-description">{area.description}</p>
                            <Link to="/contact" className="area-link">
                                طلب استشارة <span>←</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
