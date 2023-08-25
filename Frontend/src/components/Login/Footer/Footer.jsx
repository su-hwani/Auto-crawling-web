import React from "react";

export default function Footer() {
  return (
    <>
      <ul className="flex w-96 justify-center my-3">
        <li className="inline-block">
          <a href="/" className="inline-block no-underline text-myGray_bold">
            회원가입
          </a>
        </li>
        &nbsp;
        <li className="inline-block before:content-['|'] text-myGray_bold">
          &nbsp;
          <a href="#" className="inline-block no-underline text-myGray_bold">
            아이디 찾기
          </a>
        </li>
        &nbsp;
        <li className="inline-block before:content-['|'] text-myGray_bold">
          &nbsp;
          <a href="/" className="inline-block no-underline text-myGray_bold">
            비밀번호 찾기
          </a>
        </li>
      </ul>
    </>
  );
}
