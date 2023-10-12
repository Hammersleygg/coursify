import React from "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
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