import { useState } from 'react';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/64eb2df99a63ecb03c60d08c30a8160676f37bba.png';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  user?: {
    role: 'participant' | 'mentor' | 'brand';
    name: string;
  };
  onLogout?: () => void;
}

export function Navbar({ onNavigate, currentPage, user, onLogout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menu items berdasarkan role
  const getNavItems = () => {
    if (!user) {
      return [
        { label: 'Beranda', value: 'landing' },
      ];
    }

    const baseItems = [{ label: 'Beranda', value: 'landing' }];
    
    switch (user.role) {
      case 'participant':
        return [
          ...baseItems,
          { label: 'Dashboard Saya', value: 'participant' },
          { label: 'Portfolio', value: 'portfolio' },
        ];
      case 'mentor':
        return [
          ...baseItems,
          { label: 'Dashboard Mentor', value: 'mentor' },
        ];
      case 'brand':
        return [
          ...baseItems,
          { label: 'Dashboard Brand', value: 'brand' },
        ];
      default:
        return baseItems;
    }
  };

  const navItems = getNavItems();

  const getRoleLabel = () => {
    switch (user?.role) {
      case 'participant':
        return 'Peserta';
      case 'mentor':
        return 'Mentor';
      case 'brand':
        return 'Brand';
      default:
        return '';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="VINIX7" 
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.value}
                variant={currentPage === item.value ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.value)}
                className="rounded-lg"
              >
                {item.label}
              </Button>
            ))}
            
            {user && (
              <div className="ml-4 flex items-center gap-2 pl-4 border-l border-border">
                <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                  <UserIcon className="w-4 h-4 text-primary" />
                  <div className="text-sm">
                    <div className="text-primary">{user.name}</div>
                    <div className="text-muted-foreground text-xs">{getRoleLabel()}</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="rounded-lg text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Keluar
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 space-y-1">
            {user && (
              <div className="flex items-center gap-2 px-3 py-3 bg-muted rounded-lg mb-3">
                <UserIcon className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <div className="text-primary">{user.name}</div>
                  <div className="text-muted-foreground text-xs">{getRoleLabel()}</div>
                </div>
              </div>
            )}
            
            {navItems.map((item) => (
              <Button
                key={item.value}
                variant={currentPage === item.value ? 'default' : 'ghost'}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start rounded-lg"
              >
                {item.label}
              </Button>
            ))}
            
            {user && (
              <Button
                variant="ghost"
                onClick={() => {
                  onLogout?.();
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start rounded-lg text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Keluar
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}