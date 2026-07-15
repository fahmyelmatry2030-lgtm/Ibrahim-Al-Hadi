import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <h2 className="footer-logo">إبراهيم الهادي<span>.</span></h2>
                        <p>مكتب استشارات قانونية ومحاماة رائد، ملتزم بتقديم خدمات الدفاع والتمثيل القانوني بأعلى معايير الاحترافية والمصداقية لعملائنا.</p>
                    </div>

                    <div className="footer-links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/practice-areas">مجالات التخصص</Link></li>
                            <li><Link to="/team">فريق العمل</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>معلومات التواصل</h3>
                        <ul>
                            <li>📍 6 أكتوبر: الحي الأول، شارع معهد الفنون التطبيقية</li>
                            <li>📍 الإسكندرية: الأزاريطة، شارع شامبليون</li>
                            <li dir="ltr" style={{textAlign: 'right'}}>📞 +20 1012177070</li>
                            <li>📧 mr.ahmedali.lawyeroffice@gmail.com</li>
                            <li>📘 <a href="https://www.facebook.com/ibrahimelhady455/" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>صفحتنا على فيسبوك</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} مكتب الأستاذ إبراهيم الهادي للمحاماة. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
