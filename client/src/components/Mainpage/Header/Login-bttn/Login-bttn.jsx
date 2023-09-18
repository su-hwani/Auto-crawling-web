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
      window.alert("Logged out");
    } else {
      navigate("/Login");
    }
    
  };

  useEffect(() => {
    ToggleLogindiv();
    googleUserChange(setId);
  });

  return (
    <div className={`${styles["Login-div"]}`}>
      {isGoogleLogin&&<Profile photoURL={photo} displayName={name}/>}
      <button
        className={`${styles["Login-bttn"]} + ${
          isLogin === true ? styles["active"] : styles[""]
        }`}
        id="Login-bttn"
        value={userInfo.id}
        onClick={() => {
          ToggleLogindiv();
          NavLogbttn();
        }}
      >
        {isLogin ? "Log-out" : "Log-in"}
      </button>
    </div>
  );
};

export default Login;
