// WebsiteDescription.js
import React from 'react';
import './WebsiteDescription.css';
import { ReactComponent as LargeLogo } from '../../assets/LargeLogo.svg';
const WebsiteDescription = () => {
    return (
        <div className="website-description">
            <LargeLogo className='LargeLogo'/>
        </div>
    );
};

export default WebsiteDescription;
