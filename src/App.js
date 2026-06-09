import './App.css';

function App() {
  return (
    <div className="login-background">
      <div className="login-box">

      <div className="field">
          <label>email</label>
          <input type="email" placeholder="name@example.com" />
        </div>

        <div className="field">
          <label>password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button className="login-button">sign in</button>

        <p className="signup-row">
          no account? <a href="#">sign up</a>
        </p>

      </div>
    </div>
  );
}

export default App;
