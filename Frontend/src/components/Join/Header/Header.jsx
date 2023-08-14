import React from 'react';
import welcome from '../images/welcome.jpg';
import styles from './Header.module.css';
export default function Header() {
    return (
        <div>
        <header>
            <h1>회원가입</h1>
            <img src={welcome} className={styles.img}/>
        </header>
        </div>
    );
}

