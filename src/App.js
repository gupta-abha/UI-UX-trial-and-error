import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const checks = {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasLength: password.length >= 8
  };

  function handleLogin() {
    if (!checks.hasUppercase || !checks.hasLowercase || !checks.hasNumber || !checks.hasLength) {
      setError('Password does not meet all requirements');
      return;
    }
    setError('');
    navigate('/FirstScreen');
   //  alert('Login successful');
  }

  return (
    <div className="login-background">
      <div className="login-box">

      <div className="field">
          <label>email</label>
          <input type="email" placeholder="name@example.com" />
        </div>

        <div className="field">
          <label>password</label>
          <ul className="requirements">
            <li className={checks.hasUppercase ? 'met' : 'unmet'}>one uppercase letter</li>
            <li className={checks.hasLowercase ? 'met' : 'unmet'}>one lowercase letter</li>
            <li className={checks.hasNumber ? 'met' : 'unmet'}>one number</li>
            <li className={checks.hasLength ? 'met' : 'unmet'}>at least 8 characters</li>
          </ul>

          <input 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="login-button" onClick={handleLogin}>sign in</button>

        <p className="signup-row">
          no account? <a href="#">sign up</a>
        </p>

      </div>
    </div>
  );
}

export default App;
