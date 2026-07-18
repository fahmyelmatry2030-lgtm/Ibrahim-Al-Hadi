import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const areas = [
        { id: 1, title: 'الجنايات الكبرى', icon: '⚖️', description: 'تولي الدفاع في القضايا الجنائية الكبرى مثل قضايا القتل، السلاح، والمخدرات بخبرة وكفاءة عالية أمام محاكم الجنايات.' },
        { id: 2, title: 'الجنح والمخالفات', icon: '🛡️', description: 'تمثيل الموكلين في كافة قضايا الجنح (الضرب، النصب، خيانة الأمانة) والمخالفات أمام المحاكم الجزئية والابتدائية.' },
        { id: 3, title: 'قضايا الأموال العامة', icon: '💰', description: 'خبرة متخصصة في قضايا الاختلاس، الرشوة، الاستيلاء على المال العام، وقضايا الكسب غير المشروع.' },
        { id: 4, title: 'النقض الجنائي', icon: '📜', description: 'إعداد مذكرات النقض في الأحكام الجنائية والطعن عليها أمام محكمة النقض باحترافية شديدة.' },
        { id: 5, title: 'الجرائم الإلكترونية', icon: '💻', description: 'الدفاع في قضايا جرائم الإنترنت، السب والقذف الإلكتروني، وابتزاز السوشيال ميديا.' },
        { id: 6, title: 'قضايا التزوير والتزييف', icon: '✒️', description: 'التعامل الدقيق مع قضايا التزوير في المحررات الرسمية والعرفية وتزييف العملات.' },
        { id: 7, title: 'قضايا الأحداث', icon: '👦', description: 'التعامل بحساسية وخبرة قانونية مع القضايا الجنائية التي يتورط فيها الأحداث (القصر).' },
        { id: 8, title: 'الاستشارات الجنائية', icon: '🤝', description: 'تقديم الدعم والمشورة القانونية الفورية في حالة الاستدعاءات الشرطية أو تحقيقات النيابة.' }
    ];

    return (
        <section className="practice-areas section-padding" id="practice-areas">
            <div className="container">
                <div className="text-center">
                    <h4 className="subtitle">خدماتنا القانونية</h4>
                    <h2 className="section-title">التخصصات الجنائية</h2>
                    <p className="section-description">
                        مؤسسة السباعي متخصصة وحاصلة على ثقة واسعة في التعامل مع أعقد القضايا الجنائية أمام كافة المحاكم.
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
