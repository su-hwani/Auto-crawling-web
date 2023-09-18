import React, { useState, useEffect } from "react";
import styles from "./Login-bttn.module.css";
import Profile from '../../../User/Profile';
import { useLocation, useNavigate } from "react-router-dom";
import { googleLogout, googleUserChange } from '../../../../api/firebase';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = { ...location.state };

  const [isLogin, isLoginValid] = useState(false);
  const [isLoginPopup, isLoginPopupValid] = useState(false);
  const [id,setId] = useState();
  var photo = "";
  var name = "";
  var isGoogleLogin = false;
  if(userInfo.id){
    photo = userInfo.photo;
    name = userInfo.name;
    isGoogleLogin = userInfo.isGoogleLogin;
  }

  const ToggleLogindiv = () => {
    const Login = document.getElementById("Login-bttn");
    setId(Login.value);
    if (Login.value) {
      //window.alert("Logged-in");
      isLoginValid(true);
    } else {
      //window.alert("Logged-out");
      isLoginValid(false);
    }
  };
  const NavLogbttn = () => {
    if (isLogin) {
      Login.value = "";
      isLoginValid(false);
      navigate("/");
      
      if (id.includes("@")) {
        //구글간편로그인을 한 경우
        googleLogout().then(setId);;
      }
      else{
        ToggleLoginPopup();
      }
    } else {
      navigate("/Login");
      
    }
    
  };
const ToggleLoginPopup = () =>{
        if(isLoginPopup){
            isLoginPopupValid(false);
            console.log("pop");
        }
        else{
            isLoginPopupValid(true);
            console.log("up");
        }
    }
  useEffect(() => {
    ToggleLogindiv();
    googleUserChange(setId);
  });
  const TEST_TEXT =  
    `Logged Out`
  return (
    <div className={`${styles["Login-div"]}`}>
      {isGoogleLogin&&<Profile photoURL={photo} displayName={name}/>}
      <button className={`${styles['Login-bttn']} + ${isLogin === true ? styles['active'] : styles['']}`} id="Login-bttn" value={userInfo.id} onClick={()=>{ToggleLogindiv(); NavLogbttn();}}>{isLogin?'Log-out':'Log-in'}</button>
            <div className={`${styles['Login-popup']} + ${isLoginPopup === true ? styles['active'] : styles['close']}`}>
                Login popup
                <div className={`${styles['Popuptext-div']}`}>
                    {TEST_TEXT}
                </div>
                <div className={`${styles['Popupbttn-div']}`}>
                    <button className={`${styles['Login-bttn']} + ${isLoginPopup === true? styles[''] : styles['close']}`} onClick={()=>{ToggleLoginPopup()}}>Got it!</button>
                </div>
            </div>
       </div>
    );
};

export default Login;
