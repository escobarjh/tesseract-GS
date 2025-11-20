import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, LogOut, User } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { to: '/home', label: 'Rede' },
    { to: '/about', label: 'Sobre' },
    { to: '/recommendations', label: 'Recomendações' },
    { to: '/messages', label: 'Mensagens' },
    { to: '/contact', label: 'Contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to={isAuthenticated ? '/home' : '/'} className="flex items-center gap-2">
            <div className="text-2xl font-bold neon-glow-purple">TESSERACT</div>
          </Link>

          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-secondary',
                    location.pathname === item.to ? 'text-secondary' : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <div className="hidden md:flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span className="text-muted-foreground">{user?.nome}</span>
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="glass-card-hover"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {isAuthenticated && (
              <Button
                variant="ghost"
                size="icon"
                onClick={logout}
                className="glass-card-hover"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>

        {isAuthenticated && (
          <div className="md:hidden flex gap-4 mt-4 overflow-x-auto pb-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'text-sm font-medium whitespace-nowrap transition-colors hover:text-secondary',
                  location.pathname === item.to ? 'text-secondary' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
