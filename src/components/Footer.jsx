import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <h2 className="footer-logo">مؤسسة السباعي<span>.</span></h2>
                        <p>مؤسسة قانونية متخصصة في القضايا الجنائية بقيادة الأستاذ سيف العمدة السباعي، ملتزمون بتقديم دفاع قانوني رصين ومتميز لحماية حقوق عملائنا.</p>
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
                            <li>📍 جمهورية مصر العربية</li>
                            <li>📘 <a href="https://web.facebook.com/people/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D8%B9%D9%8A-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D9%87-%D9%85%D8%AA%D8%AE%D8%B5%D8%B5%D9%88%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%A7%D9%84%D8%AC%D9%86%D8%A7%D8%A6%D9%8A%D9%87/100071430833738/" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>صفحتنا على فيسبوك</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} مؤسسة السباعي للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
