import React from 'react';
import { Link } from "react-router-dom";
import './topbar.css';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../firebase-config";



export default function TopBar() {
    const [showAccountMenu, setShowAccountMenu] = React.useState(false);

    const handleSignOutClick = () => {
        setShowAccountMenu(false);
    }

    const logout = async () => {
        await signOut(auth);
      };
    

    return (
    <div className="top">
        <div className="topLeft">
            <Link to="/">
                <img src={require('./logo.png')} alt="" />
            </Link>
        </div>

         <div className="topRight">
            {showAccountMenu ? (
                <div className="accountMenu">
                    <Link className="link" to="/Account">Account Home</Link>
                    <button onClick={logout}>Sign Out</button>
                </div>
            ) : (
                <button className='accountButton' onClick={() => setShowAccountMenu(true)}>
                 Account
                 </button>
            )}
        </div>
    </div>
    )
}