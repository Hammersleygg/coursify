import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  /**
   * Registers a user by creating a new account with the provided email and password.
   *
   * @param {Event} e - The event object representing the form submission event.
   * @return {Promise<void>} A promise that resolves when the user registration is successful or rejects with an error message if there is an error.
   */
  const register = async (e)=> {
    console.log("Register function called");
    e.preventDefault(); //this prevents the page from refreshing
    try {
    const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    console.log(user);
    alert("User created successfully! Please log in.")
    navigate("/login");
    } catch(error){
      console.error('Error creating user:', error.message);
    }
  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={register}>
            <label>Username</label>
            <input type="text" 
            className="registerInput" 
            placeholder="Enter your username" 
            onChange={(e) => 
              setRegisterUserName(e.target.value)}
           />
            <label>Email</label>
            <input type="text" 
            className="registerInput" 
            placeholder="Enter your email" 
            onChange={(e) => 
              setRegisterEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" 
            className="registerInput" 
            placeholder="Enter your password" 
            onChange={(e) => 
              setRegisterPassword(e.target.value)} 
            />
            <button type="submit" className="registerButton">Register</button>
        </form>
      <div className="registerLoginText"> Already have an account?</div>
      <button  className="registerLoginButton">
        <Link className= "link" to="/login">Login</Link>
      </button>
    </div>
  )
}
