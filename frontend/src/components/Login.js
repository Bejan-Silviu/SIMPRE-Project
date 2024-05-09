import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ setIsLogin }) {
  const [user, setUser] = useState({
    name: '', email: '', password: ''
  });

  const [err, setErr] = useState('');
  const [showLogin, setShowLogin] = useState(true); // Track whether to show login or register form

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr('');
  };

  const registerSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('my-simpre-project.vercel.app/user/register', {
        username: user.name,
        email: user.email,
        password: user.password
      });
      setUser({ name: '', email: '', password: '' });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const loginSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('my-simpre-project.vercel.app/user/login', {
        email: user.email,
        password: user.password
      });
      setUser({ name: '', email: '', password: '' });
      localStorage.setItem('tokenStore', res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  return (
    <section className='login-page'>
      <div className="login-signup">
        <div className="outer">
          <div className="inner" style={{ display: showLogin ? 'block' : 'none' }}>
            <form onSubmit={loginSubmit}>
              <h3>Log in</h3>
              <div className="form-group"> {/* Add form-group class */}
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name='email'
                  required value={user.email} onChange={onChangeInput} />
              </div>
              <div className="form-group"> {/* Add form-group class */}
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password'
                  required value={user.password} onChange={onChangeInput} />
              </div>
              <div className="form-group"> {/* Add form-group class */}
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Sign In</button>
              </div>
              <p className="next_page">
                You don't have an account? <span onClick={() => setShowLogin(false)}>Register now</span>
              </p>
              <h4>{err}</h4>
            </form>
          </div>
          <div className="inner" style={{ display: showLogin ? 'none' : 'block' }}>
            <form onSubmit={registerSubmit}>
              <h3>Register</h3>
              <div className="form-group"> {/* Add form-group class */}
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter full name" name='name'
                  required value={user.name} onChange={onChangeInput} />
              </div>
              <div className="form-group"> {/* Add form-group class */}
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name='email'
                  required value={user.email} onChange={onChangeInput} />
              </div>
              <div className="form-group"> {/* Add form-group class */}
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password'
                  required value={user.password} onChange={onChangeInput} />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Register</button>
              </div>
              <p className="next_page">
                You have an account? <span onClick={() => setShowLogin(true)}>Login Now</span>
              </p>
              <h4>{err}</h4>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
