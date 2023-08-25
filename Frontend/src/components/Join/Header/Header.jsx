import React from 'react';
import welcome from '../images/welcome.jpg';
import styles from './Header.module.css';
import {FaSignInAlt} from 'react-icons/fa';

export default function Header() {
    return (
        <div>
        <header>
        <ul className='flex items-center'>

            <li><FaSignInAlt/></li>&nbsp;&nbsp;
            <li><h1>회원가입</h1></li>
        </ul>
            <img src={welcome} className={styles.img}/>
        </header>
        </div>
    );
}

