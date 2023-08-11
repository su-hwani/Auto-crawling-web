import React from 'react';
import './Header.css';
import welcome from '../images/welcome.jpg';
export default function Header() {
    return (
        <div>
        <header>
            <h1>회원가입</h1>
            <img src={welcome} className="img"/>
        </header>
        </div>
    );
}

