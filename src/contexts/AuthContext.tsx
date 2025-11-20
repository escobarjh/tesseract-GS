import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  nome: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, senha: string) => boolean;
  register: (nome: string, email: string, senha: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('tesseract_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, senha: string): boolean => {
    const users = JSON.parse(localStorage.getItem('tesseract_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.senha === senha);
    
    if (foundUser) {
      const userData = { email: foundUser.email, nome: foundUser.nome };
      setUser(userData);
      localStorage.setItem('tesseract_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = (nome: string, email: string, senha: string): boolean => {
    const users = JSON.parse(localStorage.getItem('tesseract_users') || '[]');
    
    if (users.find((u: any) => u.email === email)) {
      return false;
    }

    const newUser = { nome, email, senha };
    users.push(newUser);
    localStorage.setItem('tesseract_users', JSON.stringify(users));
    
    const userData = { email, nome };
    setUser(userData);
    localStorage.setItem('tesseract_user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tesseract_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
