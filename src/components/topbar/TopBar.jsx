import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './topbar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { ReactComponent as SmallLogo } from '../../assets/SmallLogo.svg';

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
                    <SmallLogo className='SmallLogo'/>
                </Link>
            </div>

            <div className="topRight">
                <button
                    className='accountButton'
                    onClick={() => setShowAccountMenu(!showAccountMenu)}
                >
                    Account
                </button>
            </div>

            {showAccountMenu && (
                <div className="accountMenu">
                    <Link className="link" to="/Account" onClick={() => setShowAccountMenu(false)}>
                        Account Home
                    </Link>
                    <Link className="link" to="/settings" onClick={() => setShowAccountMenu(false)}>
                        Settings
                    </Link>
                    <Link 
                        className="link" 
                        to="#" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            logout(); 
                            setShowAccountMenu(false);
                        }}
                    >
                        Sign Out
                    </Link>
                </div>
            )}
        </div>
    );
}