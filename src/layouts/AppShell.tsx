import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

const AppShell = ({ children }: { children?: any }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 h-16 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="WebGlazer" className="w-7 h-7 rounded-lg object-contain" />
          <span className="font-semibold text-foreground">WebGlazer</span>
        </a>

        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-3">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-8 h-8 rounded-full ring-1 ring-border"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user.displayName ?? user.email}
              </span>
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            title="Sign out"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
