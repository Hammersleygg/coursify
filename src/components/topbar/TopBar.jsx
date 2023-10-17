import React from 'react';
import { Link } from "react-router-dom";
import './topbar.css';


export default function TopBar() {
    // const user = false;

    return (
    <div className="top">
        <div className="topLeft">
            <Link to="/">
                <img src={require('./logo.png')} alt="" />
            </Link>
        </div>

         <div className="topRight">
                    <Link className="link" to="/Account">Account</Link>
        </div>
    </div>
    )
}