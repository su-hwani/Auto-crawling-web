import React, { useState } from "react";
import styles from './Main.module.css';
import {MdEmail} from "react-icons/md";

export default function Main() {
  const [info, setInfo] = useState({id:'',passwd:'',email:''});
  const [infos, setInfos] = useState([]);
  const handleChange = (e) => {
    const [name,value] = e.target;
    setInfo(info[name]=value);
  }
  const handleSubmit = (info) => {
    setInfos({...infos,info});
  }

  return (
    <div className={styles.info}>
    <form className={styles.form}>
      <input
        type="text"
        placeholder="아이디"
        value={info.id}
        name="id"
        onChange={handleChange}
        className={styles.input}
        data-name="id"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={info.passwd}
        name="passwd"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="이메일"
        value={info.email}
        name="email"
        onChange={handleChange}
        className={styles.input}
      />
    </form>
    <button onSubmit={handleSubmit}>가입하기</button>
    </div>
      
  );
}
