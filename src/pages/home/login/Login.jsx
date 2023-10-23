
import "./login.css"
import { useState } from "react";
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { auth } from "../../../firebase-config";

export default function Login() {

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });




 
  
  const login = async () => {

      try {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(user);
      } catch(error){
        console.log(error.message);
      }
  
    }
    




  

  return (
    <div className="login">
        <h1 className="loginTitle">Login</h1>
      <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email" onChange={(event) => {
              setLoginEmail(event.target.value);
            }} />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password" onChange={(event) => {
              setLoginPassword(event.target.value);
             }} />
            <button onClick={login} className="loginButton">Login</button>
      </form>
      {/* <button className="loginRegisterButton">
        <Link to="/register">Register</Link>
      </button> */}
    </div>
  )
}
