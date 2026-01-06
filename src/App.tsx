import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AppShell from './layouts/AppShell';
import AppHome from './pages/AppHome';
import NotFound from './components/NotFound';
import { isAuthenticated } from './lib/auth';

const RequireAuth = ({ children }: { children?: any }) => {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <div>
      <nav style={{ padding: 8, borderBottom: '1px solid #333' }}>
        <Link to="/" style={{ marginRight: 8 }}>
          Home
        </Link>
        <Link to="/login" style={{ marginRight: 8 }}>
          Login
        </Link>
        <Link to="/app">App</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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