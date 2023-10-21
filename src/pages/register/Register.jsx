import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../firebase-config";

export default function Register() {
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async ()=> {
    try {
    const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    console.log(user);
    } catch(error){
      console.log(error.message);
    }

  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username" onChange={(event) => {
              setRegisterUserName(event.target.value);
            }}/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email" onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password" onChange={(event) => {
              setRegisterPassword(event.target.value);
            }} />
            <button onClick={register}className="registerButton">Register</button>
      </form>
      <div className="registerLoginText"> Already have an account?</div>
      <button  className="registerLoginButton">
      <Link to="/login">Login</Link>
      </button>
    </div>
  )
}
