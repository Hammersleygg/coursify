import React from "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" "></i> 
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CLASSES</li>
                    <li className="topListItem">DASHBOARD</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img 
                className="topImg"
                src="https://gricemarinelab.cofc.edu/images/logo/cofcblack.jpg"
                alt="" 
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}