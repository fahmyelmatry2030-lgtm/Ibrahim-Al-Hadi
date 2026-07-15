import React from 'react';
import './ClientDashboard.css';

const ClientDashboard = () => {
    return (
        <div className="client-dashboard">
            <div className="dashboard-header">
                <h2>بوابة العميل</h2>
                <p>مرحباً بك أستاذ أحمد، يمكنك متابعة حالة قضاياك ومواعيدك من هنا.</p>
            </div>

            {/* Main Progress Tracker */}
            <div className="dashboard-card highlight-card">
                <div className="card-header">
                    <h3>حالة القضية الحالية (رقم 4021 - مدني)</h3>
                    <span className="badge active">تتقدم بشكل طبيعي</span>
                </div>
                <div className="card-body">
                    <div className="case-progress">
                        <div className="progress-step completed">
                            <div className="step-circle">✓</div>
                            <div className="step-text">استلام التوكيل</div>
                        </div>
                        <div className="progress-step completed">
                            <div className="step-circle">✓</div>
                            <div className="step-text">إعداد صحيفة الدعوى</div>
                        </div>
                        <div className="progress-step active">
                            <div className="step-circle">3</div>
                            <div className="step-text">تحديد موعد الجلسة الأولى</div>
                        </div>
                        <div className="progress-step">
                            <div className="step-circle">4</div>
                            <div className="step-text">المرافعة وتقديم المستندات</div>
                        </div>
                        <div className="progress-step">
                            <div className="step-circle">5</div>
                            <div className="step-text">صدور الحكم</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Documents */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>المستندات المطلوبة</h3>
                        <button className="btn-link">رفع ملف جديد</button>
                    </div>
                    <div className="card-body">
                        <div className="document-list">
                            <div className="doc-item">
                                <div className="doc-icon">📄</div>
                                <div className="doc-info">
                                    <h4>صورة البطاقة الشخصية</h4>
                                    <p className="status text-success">✓ تم الرفع والمراجعة</p>
                                </div>
                            </div>
                            <div className="doc-item action-needed">
                                <div className="doc-icon text-warning">⚠️</div>
                                <div className="doc-info">
                                    <h4>أصل عقد البيع الابتدائي</h4>
                                    <p className="status text-warning">مطلوب إحضاره للمكتب أو رفعه</p>
                                </div>
                                <button className="btn-upload">رفع</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>المدفوعات والفواتير</h3>
                    </div>
                    <div className="card-body">
                        <div className="billing-summary">
                            <div className="billing-row">
                                <span>إجمالي الأتعاب المتفق عليها:</span>
                                <strong>50,000 ج.م</strong>
                            </div>
                            <div className="billing-row">
                                <span>المدفوع مقدماً:</span>
                                <strong className="text-success">20,000 ج.م</strong>
                            </div>
                            <div className="billing-divider"></div>
                            <div className="billing-row total">
                                <span>المتبقي دفعه (موعد الاستحقاق بعد الجلسة القادمة):</span>
                                <strong className="text-danger">30,000 ج.م</strong>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>دفع الآن (بطاقة ائتمان)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
