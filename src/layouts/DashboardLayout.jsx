import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    // Mock role for now (admin, lawyer, client)
    const role = localStorage.getItem('role') || 'admin';

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('role');
        navigate('/login');
    };

    const navItems = {
        admin: [
            { path: '/dashboard/admin', icon: '📊', label: 'الرئيسية' },
            { path: '/dashboard/cases', icon: '📁', label: 'إدارة القضايا' },
            { path: '/dashboard/clients', icon: '👥', label: 'العملاء' },
            { path: '/dashboard/lawyers', icon: '⚖️', label: 'فريق المحامين' },
            { path: '/dashboard/appointments', icon: '📅', label: 'المواعيد والحجوزات' },
            { path: '/dashboard/invoices', icon: '💳', label: 'المالية والفواتير' },
        ],
        lawyer: [
            { path: '/dashboard/lawyer', icon: '📊', label: 'الرئيسية' },
            { path: '/dashboard/my-cases', icon: '📁', label: 'قضاياي' },
            { path: '/dashboard/sessions', icon: '📅', label: 'الجلسات القادمة' },
            { path: '/dashboard/notes', icon: '📝', label: 'مذكراتي السرية' },
        ],
        client: [
            { path: '/dashboard/client', icon: '📊', label: 'الرئيسية' },
            { path: '/dashboard/my-case', icon: '📁', label: 'تفاصيل قضيتي' },
            { path: '/dashboard/documents', icon: '📄', label: 'مستنداتي' },
            { path: '/dashboard/payments', icon: '💳', label: 'المدفوعات' },
        ]
    };

    const currentNav = navItems[role] || navItems.client;

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-icon">⚖</div>
                        {sidebarOpen && <h3>مؤسسة إبراهيم الهادي</h3>}
                    </div>
                </div>

                <div className="sidebar-user">
                    <div className="user-avatar">
                        {role === 'admin' ? '👨‍💼' : role === 'lawyer' ? '⚖️' : '👤'}
                    </div>
                    {sidebarOpen && (
                        <div className="user-info">
                            <h4>{role === 'admin' ? 'مدير النظام' : role === 'lawyer' ? 'محامي' : 'عميل'}</h4>
                            <p>متصل الآن</p>
                        </div>
                    )}
                </div>

                <nav className="sidebar-nav">
                    {currentNav.map((item, index) => (
                        <Link 
                            key={index} 
                            to={item.path} 
                            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                            title={!sidebarOpen ? item.label : ''}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {sidebarOpen && <span className="nav-label">{item.label}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="btn-logout" title={!sidebarOpen ? 'تسجيل الخروج' : ''}>
                        <span className="nav-icon">🚪</span>
                        {sidebarOpen && <span className="nav-label">تسجيل الخروج</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Topbar */}
                <header className="dashboard-topbar">
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        ☰
                    </button>
                    
                    <div className="topbar-actions">
                        <Link to="/" className="btn-view-site">🌐 عرض الموقع</Link>
                        <div className="notifications">
                            <span className="icon">🔔</span>
                            <span className="badge">3</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
