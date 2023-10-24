
import "./login.css"
import { useState } from "react";
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Login() {

  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const navigate = useNavigate();
  //const usersCollectionRef = collection(db, "users")

  /**
   * Registers a user by creating a new account with the provided email and password.
   *
   * @param {Event} e - The event object representing the form submission event.
   * @return {Promise<void>} A promise that resolves when the user registration is successful or rejects with an error message if there is an error.
   */
  const login = async (e)=> {
    console.log("Login function called");
    e.preventDefault(); //this prevents the page from refreshing
    try {
    const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    console.log(user);
    alert("User Logged in successfully")
    navigate("/Account2");
    } catch(error){
      console.error('Error Logging in user:', error.message);
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
