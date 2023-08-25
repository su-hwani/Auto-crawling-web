import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLockPerson } from "react-icons/md";

export default function Main() {
  const [info, setInfo] = useState({ id: "", passwd: "" });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = () => {
    //
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
        onSubmit={handleSubmit}
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
