import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './topbar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

export default function TopBar() {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        setShowAccountMenu(false);
    }

    const logout = async () => {
        await signOut(auth);
        navigate('/login');
    }

    const goToSettings = () => {
        navigate('/settings'); // Navigate to the settings page
    }

    return (
        <div className="top">
            <div className="topLeft">
                <Link to="/">
                    <img src={require('./logo.png')} alt="" />
                </Link>
            </div>

            <div className="topRight">
                <button
                    className='accountButton'
                    onClick={() => setShowAccountMenu(!showAccountMenu)}
                >
                    Account
                </button>
                <button className='settingsButton' onClick={goToSettings}>
                    Settings
                </button>
            </div>

            {showAccountMenu && (
                <div className="accountMenu">
                    <Link className="link" to="/Account">
                        Account Home
                    </Link>
                    <button onClick={logout}>Sign Out</button>
                </div>
            )}
        </div>
    );
}