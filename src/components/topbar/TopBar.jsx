import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './topbar.css';


export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <img src={logo} alt="coursify logo" className="topLogo" />
                <i className=" "></i> 
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CLASSES</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/dashboard">DASHBOARD</Link>
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <img 
                            className="topImg"
                            src="https://gricemarinelab.cofc.edu/images/logo/cofcblack.jpg"
                            alt="" 
                        />
                    ) : (
                      <ul className="topListItem">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                      </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}