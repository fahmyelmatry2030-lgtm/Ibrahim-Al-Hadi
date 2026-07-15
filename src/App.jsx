import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Public Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// New Multi-role Dashboard
import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import LawyerDashboard from './pages/dashboard/LawyerDashboard';
import ClientDashboard from './pages/dashboard/ClientDashboard';
import MultiRoleLogin from './pages/dashboard/Login';

// Legacy Admin Pages (keeping for reference)
import AdminLayout from './pages/admin/AdminLayout';
import DashboardOverview from './pages/admin/DashboardOverview';
import AppointmentsPage from './pages/admin/AppointmentsPage';
import MessagesPage from './pages/admin/MessagesPage';
import LoginPage from './pages/admin/LoginPage';

// Auth & State
import ProtectedRoute from './components/ProtectedRoute';
import { AdminDataProvider } from './context/AdminDataContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for the main website 
const PublicLayout = ({ children }) => (
  <div className="app-container">
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
    <BookingModal />
  </div>
);

function App() {
  return (
    <AdminDataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/practice-areas" element={<PublicLayout><PracticeAreasPage /></PublicLayout>} />
          <Route path="/team" element={<PublicLayout><TeamPage /></PublicLayout>} />
          <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />
          <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
          <Route path="/faq" element={<PublicLayout><FAQPage /></PublicLayout>} />
          <Route path="/privacy" element={<PublicLayout><PrivacyPolicyPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

          {/* Unified Multi-role Login */}
          <Route path="/login" element={<MultiRoleLogin />} />

          {/* New Multi-role Dashboard System (Phase 3) */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="lawyer" element={<LawyerDashboard />} />
            <Route path="client" element={<ClientDashboard />} />
          </Route>

          {/* Legacy Admin Login */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Legacy Admin Dashboard Routes (Protected) */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardOverview />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="messages" element={<MessagesPage />} />
          </Route>
        </Routes>
      </Router>
    </AdminDataProvider>
  );
}

export default App;
