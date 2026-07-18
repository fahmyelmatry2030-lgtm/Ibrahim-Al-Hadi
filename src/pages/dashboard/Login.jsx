import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [role, setRole] = useState('admin');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock authentication
        localStorage.setItem('role', role);
        
        // Redirect based on role
        if (role === 'admin') navigate('/dashboard/admin');
        else if (role === 'lawyer') navigate('/dashboard/lawyer');
        else navigate('/dashboard/client');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <div className="login-logo">⚖</div>
                    <h2>مؤسسة السباعي</h2>
                    <p>بوابة الدخول للنظام الإداري</p>
                </div>
                
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>الدخول بصلاحية:</label>
                        <select 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control"
                        >
                            <option value="admin">مدير النظام (Admin)</option>
                            <option value="lawyer">محامي (Lawyer)</option>
                            <option value="client">عميل (Client)</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>رقم الهاتف أو البريد الإلكتروني</label>
                        <input type="text" className="form-control" defaultValue="admin@lawfirm.com" />
                    </div>

                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <input type="password" className="form-control" defaultValue="password123" />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                        تسجيل الدخول
                    </button>
                    
                    <div className="login-footer">
                        <a href="/">العودة للموقع الرئيسي</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
