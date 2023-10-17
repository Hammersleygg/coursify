import React from 'react';
import { Link } from "react-router-dom";
import './topbar.css';


export default function TopBar() {
    const user = false;

    return (
        <div className="top">
            <div className="topLeft">
                <h1 className='appName'>Coursify</h1>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">Courses</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>

            {/* <div className="topRight">
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
            </div> */}
        </div>
    )
}