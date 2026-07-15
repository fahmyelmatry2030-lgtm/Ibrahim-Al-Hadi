import React, { useEffect } from 'react';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '16px', color: 'var(--primary-gold)' }}>سياسة الخصوصية والشروط</h1>
                </div>
            </div>

            <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-gray)' }}>
                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>1. مقدمة</h2>
                    <p style={{ marginBottom: '30px' }}>
                        نحن في مكتب الأستاذ إبراهيم الهادي للمحاماة نولي اهتماماً بالغاً بخصوصية عملائنا وسرية معلوماتهم الشخصية والقانونية. تهدف هذه السياسة إلى توضيح كيفية جمع واستخدام وحماية البيانات التي تزودنا بها.
                    </p>

                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>2. جمع المعلومات</h2>
                    <p style={{ marginBottom: '30px' }}>
                        نقوم بجمع المعلومات التي تقدمها طواعية عند ملء نماذج الاتصال، حجز استشارة، أو إرسال مستندات خاصة بقضيتك. تشمل هذه المعلومات الاسم، رقم الهاتف، البريد الإلكتروني، وتفاصيل المشكلة القانونية.
                    </p>

                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>3. استخدام المعلومات</h2>
                    <ul style={{ marginBottom: '30px', paddingRight: '20px' }}>
                        <li>التواصل معك لترتيب مواعيد الاستشارات.</li>
                        <li>دراسة قضيتك وتقديم الرأي القانوني المبدئي.</li>
                        <li>إرسال تحديثات هامة بخصوص خدماتنا أو تغييرات القوانين (إذا اشتركت في قائمتنا البريدية).</li>
                    </ul>

                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>4. سرية المعلومات (Attorney-Client Privilege)</h2>
                    <p style={{ marginBottom: '30px' }}>
                        كافة المعلومات والمستندات التي يتم مشاركتها معنا تخضع لمبدأ السرية بين المحامي وموكله، ولا يتم مشاركتها مع أي طرف ثالث إلا بموجب موافقة خطية منك أو تنفيذاً لأمر قضائي.
                    </p>

                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>5. سياسة ملفات تعريف الارتباط (Cookies)</h2>
                    <p style={{ marginBottom: '30px' }}>
                        يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة تصفحك وتحليل حركة الزوار. يمكنك تعطيلها من إعدادات المتصفح الخاص بك إذا رغبت في ذلك.
                    </p>

                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '20px' }}>6. التعديلات على السياسة</h2>
                    <p style={{ marginBottom: '30px' }}>
                        نحتفظ بالحق في تحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة. استمرارك في استخدام الموقع يعني موافقتك على السياسة المعدلة.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
