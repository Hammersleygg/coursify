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