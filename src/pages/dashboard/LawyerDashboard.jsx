import React from 'react';
import './LawyerDashboard.css';

const LawyerDashboard = () => {
    return (
        <div className="lawyer-dashboard">
            <div className="dashboard-header">
                <h2>بوابة المحامي</h2>
                <p>مرحباً بك أستاذ إبراهيم، لديك 3 جلسات هذا الأسبوع.</p>
            </div>

            {/* Stats */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon bg-blue">⚖️</div>
                    <div className="stat-details">
                        <h3>18</h3>
                        <p>القضايا النشطة تحت إشرافك</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-gold">📅</div>
                    <div className="stat-details">
                        <h3>3</h3>
                        <p>جلسات الأسبوع القادم</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-green">📄</div>
                    <div className="stat-details">
                        <h3>5</h3>
                        <p>مذكرات تحتاج للمراجعة</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                {/* Upcoming Sessions */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>أقرب الجلسات</h3>
                        <button className="btn-link">جدول الجلسات</button>
                    </div>
                    <div className="card-body">
                        <div className="session-card urgent">
                            <div className="session-date">
                                <span>16</span>
                                <small>يوليو</small>
                            </div>
                            <div className="session-info">
                                <h4>محكمة استئناف القاهرة (دائرة 5)</h4>
                                <p>رقم القضية: 1402/2026 - تجاري</p>
                                <span className="time-badge">غداً - 09:00 صباحاً</span>
                            </div>
                        </div>
                        <div className="session-card">
                            <div className="session-date">
                                <span>18</span>
                                <small>يوليو</small>
                            </div>
                            <div className="session-info">
                                <h4>محكمة الأسرة بالمعادي</h4>
                                <p>رقم القضية: 890/2026 - أحوال شخصية</p>
                                <span className="time-badge">بعد 3 أيام - 11:30 صباحاً</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secret Notes / To-Do */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>المذكرات والمهام (خاص)</h3>
                        <button className="btn-link">+ إضافة</button>
                    </div>
                    <div className="card-body">
                        <ul className="todo-list">
                            <li>
                                <input type="checkbox" />
                                <span>مراجعة العقد الخاص بشركة "ألفا" قبل يوم الخميس.</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>التواصل مع موكل قضية رقم 1402 لإحضار التوكيل الأصلي.</span>
                            </li>
                            <li>
                                <input type="checkbox" checked readOnly />
                                <span className="completed">تقديم صحيفة الدعوى للقضية المدنية الجديدة.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerDashboard;
