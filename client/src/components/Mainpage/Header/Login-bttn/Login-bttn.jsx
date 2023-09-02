import React, {useState} from 'react';
import styles from './Login-bttn.module.css'
import {Link} from 'react-router-dom'


const Login = () => {
    const [LogindivIsOpen, LogindivSetIsOpen] = useState(false);
    const ToggleLogindiv = () => {
        const Logindiv = document.getElementById('Login-div');
        if (LogindivIsOpen){
          LogindivSetIsOpen(false);
          console.log(Logindiv);
        }
        else{
          LogindivSetIsOpen(true);
          console.log(Logindiv);
        }
      }
    return (
        <div className={`${styles['Login-div']}`}>
         <Link to='/Login'><button className={`${styles['Login-bttn']}`} onClick={ToggleLogindiv}>Log-in</button></Link>
         <section>
        <div className={` ${styles['Login-popup']} + ${LogindivIsOpen === true ? styles['active'] : styles['close']}`} id='Login-div'>
          <h2>Login Popup</h2>
          <div className={`${styles['ID']}`}>
            <h3> ID </h3>
            <input className={`${styles['ID-input']}`}></input>
          </div>
          <div className={`${styles['PW']}`}>
            <h3> PW </h3>
            <input className={`${styles['PW-input']}`}></input>
          </div>
        </div>
      </section>
       </div>
    );
}

export default Login;