import { useNavigate } from 'react-router-dom';
import { login } from '../lib/auth';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate('/app');
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Mock Login</button>
    </div>
  );
};

export default Login;
