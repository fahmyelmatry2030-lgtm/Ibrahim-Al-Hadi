import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h2>نظرة عامة على النظام</h2>
                <p>مرحباً بك في لوحة تحكم مؤسسة السباعي للمحاماة</p>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon bg-blue">📁</div>
                    <div className="stat-details">
                        <h3>142</h3>
                        <p>إجمالي القضايا</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-green">👥</div>
                    <div className="stat-details">
                        <h3>89</h3>
                        <p>العملاء النشطين</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-purple">⚖️</div>
                    <div className="stat-details">
                        <h3>12</h3>
                        <p>جلسات الأسبوع</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon bg-gold">💰</div>
                    <div className="stat-details">
                        <h3>24,500</h3>
                        <p>الإيرادات (ج.م)</p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
                {/* Recent Cases */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>أحدث القضايا المضافة</h3>
                        <button className="btn-link">عرض الكل</button>
                    </div>
                    <div className="card-body">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>رقم القضية</th>
                                    <th>العميل</th>
                                    <th>النوع</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#4021</td>
                                    <td>أحمد محمود</td>
                                    <td>مدني</td>
                                    <td><span className="badge pending">قيد المراجعة</span></td>
                                </tr>
                                <tr>
                                    <td>#4020</td>
                                    <td>شركة النور</td>
                                    <td>تجاري</td>
                                    <td><span className="badge active">متداولة</span></td>
                                </tr>
                                <tr>
                                    <td>#4019</td>
                                    <td>سعاد حسن</td>
                                    <td>أسرة</td>
                                    <td><span className="badge closed">مغلقة</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Upcoming Appointments */}
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>مواعيد اليوم</h3>
                        <button className="btn-link">التقويم</button>
                    </div>
                    <div className="card-body">
                        <div className="appointment-list">
                            <div className="appointment-item">
                                <div className="time">10:00 ص</div>
                                <div className="details">
                                    <h4>استشارة: تأسيس شركة</h4>
                                    <p>مع: أ. سيف السباعي</p>
                                </div>
                            </div>
                            <div className="appointment-item">
                                <div className="time">12:30 م</div>
                                <div className="details">
                                    <h4>جلسة محكمة استئناف</h4>
                                    <p>القضية #3902</p>
                                </div>
                            </div>
                            <div className="appointment-item">
                                <div className="time">03:00 م</div>
                                <div className="details">
                                    <h4>استشارة هاتفية</h4>
                                    <p>العميل: طارق سعيد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
