import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLockPerson } from "react-icons/md";
import { useNavigate,useLocation } from "react-router-dom";
import Member from "../../../context/Member";
import fakeLoginClient from "../../../api/fakeLoginClient";

const isNumeric = (n) => !isNaN(n);

export default function Main() {
  const [info, setInfo] = useState({ id: "", passwd: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // const alarm = () => {
  //   window.location.reload(true);
  //   if(window.location.href === process.env.REACT_APP_loginURL){
  //     if (info.id === "" || info.passwd === "")
  //           alert("아이디 또는 패스워드를 입력하세요!");
  //         else if (info.id.length < 4)
  //           alert("아이디는 4자리이상 입력해주세요!");
  //         else if (info.passwd.length < 6)
  //           alert("비밀번호는 6자리이상 입력해주세요!");
  //         else if (isNumeric(info.id)) alert("아이디에 숫자만 입력하였습니다!");
  //         else alert("잘못입력하였습니다 다시 입력해주세요!!!");
  //         setInfo({ id: "", passwd: "" });
  //         return;
  //   }
  //   else {
  //     alert("로그인 성공!");
  //     return;
  //   }

  // }

  const goLogin = () => {
    //로그인 검사후 mainpage로 이동
    const client = new fakeLoginClient(info.id);
    console.log("Client:",client);
    const member = new Member(client);
    console.log("Member:",member);
    // member.loginInfo().then((res) =>
    //   res.map((customer) => {
    //     let check = false;
    //     if (info.id === customer.id && info.passwd === customer.passwd){
    //       navigate("/");
    //       check = true;
    //     }
    //     console.log(check);
    //     console.log("Login");
    //   }));
    async function handleLogin() {
      try {
          const res = await member.loginInfo();
          console.log(res);
          if (res) {
              const { id, passwd } = res;
      
              if (info.id === id && info.passwd === passwd) {
                  navigate("/",{state:{id:id}});
                  console.log("Login");
              } else {
                  window.alert("Login failed, ID doesn't exist");
                  console.log("Login failed, ID doesn't exist");
              }
          } else {
              window.alert("Login failed due to undefined response");
              console.log("Login failed due to undefined response");
          }
      } catch (error) {
          console.error(error);
      }
  }
  
  handleLogin();
  };

  return (
    <div className="h-full w-full flex flex-col items-center mb-0">
      <form className="h-full w-full flex flex-col items-center mt-3">
        <div className="flex h-1/3 w-4/5 mt-0 mb-0 rounded-t-md border-2 border-myGray border-solid justify-center items-center">
          <div className="flex justify-center items-center mb-0">
            <span>
              <BsFillPersonFill size="16" />
            </span>
          </div>
          <input
            type="text"
            placeholder="아이디"
            value={info.id}
            name="id"
            onChange={handleChange}
            data-name="id"
            className="h-5/6 w-5/6 border-transparent mt-0"
          />
        </div>
        <div className="flex h-1/3 w-4/5 mt-0 mb-0 rounded-b-md border-t-0 border-2 border-myGray border-solid justify-center items-center ">
          <div className="flex justify-center items-center mb-0">
            <span>
              <MdOutlineLockPerson size="16" />
            </span>
          </div>
          <input
            type="password"
            placeholder="비밀번호"
            value={info.passwd}
            name="passwd"
            onChange={handleChange}
            className="h-5/6 w-5/6 border-transparent"
          />
        </div>
      </form>
      <button
        onClick={goLogin}
        className="h-1/3 w-4/5 rounded-md font-bold text-lg bg-blackBttn text-myWhite
      hover:brightness-150 
      -translate-y-2/4
      "
      >
        로그인하기
      </button>
    </div>
  );
}
