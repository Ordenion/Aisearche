export const isAuthenticated = () => localStorage.getItem('mock-auth') === 'true';
export const login = () => localStorage.setItem('mock-auth', 'true');
export const logout = () => localStorage.setItem('mock-auth', 'false');
