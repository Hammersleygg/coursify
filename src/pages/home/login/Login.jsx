
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run this effect only once

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      alert('User logged in successfully');
      navigate('/Account2');
    } catch (error) {
      console.error('Error logging in user:', error.message);
    }
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login} className="loginButton">
          Login
        </button>
      </form>
      { <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button> }
    </div>
  );
}
