import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { ParticipantDashboard } from './pages/ParticipantDashboard';
import { BrandDashboard } from './pages/BrandDashboard';
import { MentorPage } from './pages/MentorPage';
import { PortfolioPage } from './pages/PortfolioPage';

type Page = 'landing' | 'participant' | 'brand' | 'mentor' | 'portfolio';
type UserRole = 'participant' | 'mentor' | 'brand';

interface User {
  role: UserRole;
  name: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (role: UserRole, name: string) => {
    setUser({ role, name });
    // Redirect ke dashboard sesuai role
    setCurrentPage(role);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  // Jika belum login dan mencoba akses dashboard, redirect ke login
  const handleNavigate = (page: Page) => {
    // Untuk dashboard pages, set page agar bisa trigger login page
    if (!user && (page === 'participant' || page === 'brand' || page === 'mentor')) {
      setCurrentPage(page);
      return;
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    // Jika belum login dan mencoba akses dashboard, tampilkan login
    if (!user && (currentPage === 'participant' || currentPage === 'brand' || currentPage === 'mentor')) {
      return <LoginPage onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'participant':
        return user?.role === 'participant' ? <ParticipantDashboard /> : <LoginPage onLogin={handleLogin} />;
      case 'brand':
        return user?.role === 'brand' ? <BrandDashboard /> : <LoginPage onLogin={handleLogin} />;
      case 'mentor':
        return user?.role === 'mentor' ? <MentorPage /> : <LoginPage onLogin={handleLogin} />;
      case 'portfolio':
        return <PortfolioPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {user && currentPage !== 'landing' && (
        <Navbar 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          user={user}
          onLogout={handleLogout}
        />
      )}
      {renderPage()}
      <Toaster />
    </div>
  );
}