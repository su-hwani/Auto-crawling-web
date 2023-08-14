import React,{useState} from "react";

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
    <div className="h-full w-full flex flex-col justify-content items-center">
      <form className="h-full w-full flex flex-col justify-content items-center">
        <input
          type="text"
          placeholder="아이디"
          value={info.id}
          name="id"
          onChange={handleChange}
          data-name="id"
          className='h-1/4 w-3/5'
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={info.passwd}
          name="passwd"
          onChange={handleChange}
          className='h-1/4 w-3/5'
        />
      </form>
      <button onSubmit={handleSubmit} className='h-1/4 w-2/5'>로그인하기</button>
    </div>
  );
}
