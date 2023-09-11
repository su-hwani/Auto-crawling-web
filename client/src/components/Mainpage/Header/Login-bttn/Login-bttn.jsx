
import React, {useState,useEffect} from 'react';
import styles from './Login-bttn.module.css'
import {useLocation,useNavigate} from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userInfo = {...location.state};
    
    const [isLogin, isLoginValid] = useState(false);
    const ToggleLogindiv = () => {
        const Login = document.getElementById('Login-bttn');
        if (Login.value) {
            //window.alert("Logged-in");
            isLoginValid(true);
        } else {
            //window.alert("Logged-out");
            isLoginValid(false);
        }
    }
    const NavLogbttn = () => {
        if (isLogin) {
            Login.value="";
            isLoginValid(false);
            navigate("/");
            window.alert("Logged out");
        } else {
            navigate("/Login");
        }
    }
    useEffect(()=>{
        ToggleLogindiv();
    },[]);
    
    return (
        <div className={`${styles['Login-div']}`}>
         <button className={`${styles['Login-bttn']} + ${isLogin === true ? styles['active'] : styles['']}`} id="Login-bttn" value={userInfo.id} onClick={()=>{ToggleLogindiv(); NavLogbttn();}}>{isLogin?'Log-out':'Log-in'}</button>
       </div>
    );
}

export default Login;