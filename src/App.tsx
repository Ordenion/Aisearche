import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Audit from './pages/Audit';
import AppShell from './layouts/AppShell';
import AppHome from './pages/AppHome';
import NotFound from './components/NotFound';
import { useAuth } from './contexts/AuthContext';

const RequireAuth = ({ children }: { children?: any }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="w-8 h-8 border-2 border-[hsl(var(--glow-green))] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {

  return (
    <div>
      {/* Only show default nav on non-landing pages */}
      {/*{!isLandingPage && (
        <nav style={{ padding: 8, borderBottom: '1px solid #333' }}>
          <Link to="/" style={{ marginRight: 8 }}>
            Home
          </Link>
          <Link to="/login" style={{ marginRight: 8 }}>
            Login
          </Link>
          <Link to="/app">App</Link>
        </nav>
      )}*/}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/audit" element={<Audit />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <AppShell>
                <AppHome />
              </AppShell>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;