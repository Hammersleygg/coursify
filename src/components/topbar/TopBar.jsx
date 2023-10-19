import React from 'react';
import { Link } from "react-router-dom";
import './topbar.css';


export default function TopBar() {
    const [showAccountMenu, setShowAccountMenu] = React.useState(false);

    const handleSignOutClick = () => {
        setShowAccountMenu(false);
    }

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
                    <button onClick={handleSignOutClick}>Sign Out</button>
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