
import React, { useState, useRef } from 'react';
import { FaReact, FaUserCircle, FaHistory, FaRegStar, FaFilePdf, FaCog, FaQuestionCircle } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
import "./App.css";

const App = () => {
  const [FiledivIsOpen, FiledivSetIsOpen] = useState(false);
  const [LogindivIsOpen, LogindivSetIsOpen] = useState(false);
  const [FileIsLoaded, FileLoadSetIsOpen] = useState(false)
  const ToggleFilediv = () => {
      const Filediv = document.getElementById('File-div');
      if (FiledivIsOpen) {
      FiledivSetIsOpen(false);
    } else {
      FiledivSetIsOpen(true);
    }
  }
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

    const LoadedFile = () => {
        if (FileIsLoaded) {
            FileLoadSetIsOpen(false);
        }
        else {
            FileLoadSetIsOpen(true);
        }
    }
  return(
    
    <div className="Testpage">
    <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      
      <div className="Top border-2 h-20">
       <section className="Menu">
         <div className="Menu-sidebar mt-20 w-40 h-[800px] bg-slate-300">
           <div className="logo-div p-5 w-40 h-20 border-b-2 border-b-slate-200 bg-slate-300">
             <form className="fa-react">
              <FaUserCircle className="Icons" size="40"/>
             </form>
             <h2 className="pl-12 pt-2.5 font-primary">MyPage</h2> 
           </div>
           <div className="logo-div p-4 w-40 h-20 border-b-2 border-b-slate-200 bg-slate-300">
             <form className="fa-react">
              <FaHistory className="Icons" size="40"/>
             </form>
             <h2 className="pl-[52px] pt-2.5 font-primary">Recent</h2> 
           </div>
           <div className="logo-div p-4 w-40 h-20 border-b-2 border-b-slate-200 bg-slate-300">
             <form className="fa-react">
              <FaRegStar className="Icons" size="40" />
             </form>
             <h2 className="pl-[52px] pt-2.5 font-primary">Favorites</h2> 
           </div>
           <div className="logo-div p-4 w-40 h-20 border-b-2 border-b-slate-200 bg-slate-300">
             <form className="fa-react">
              <FaCog className="Icons" size="40" />
             </form>
             <h2 className="pl-[52px] pt-2.5 font-primary">Settings</h2> 
           </div>
           <div className="logo-div p-4 w-40 h-20 border-b-2 border-b-slate-200 bg-slate-300">
             <form className="fa-react">
              <FaQuestionCircle className="Icons" size="40" />
             </form>
             <h2 className="pl-[52px] pt-2.5 font-primary">FAQ</h2> 
           </div>

         </div>
       </section>
       <div className="title-div">
         <h1>Auto Crawling</h1>
       </div>
       <div className="Login-div">
         <button className="bttn Login-bttn" onClick={ToggleLogindiv}>Log-in</button>
         <section>
        <div className={`Login-popup ${LogindivIsOpen === true ? 'active' : 'close'}`} id="Login-div">
          <h2>Login Popup</h2>
          <div className="ID">
            <h3> ID </h3>
            <input className="ID-input"></input>
          </div>
          <div className="PW">
            <h3> PW </h3>
            <input className="PW-input"></input>
          </div>
        </div>
      </section>
       </div>
      </div>
      <div className="URL-div">
        <h2>Type URL</h2>
        <input className="URL-input"></input>
        <button className="bttn URL-bttn" onClick={ToggleFilediv}> Go!</button>
      </div>
      <div className={`File-div ${FiledivIsOpen === true ? 'active' : 'close'}`} id="File-div">
        <h2>File Download</h2>
        <button className="bttn download-bttn">
          <form className="fa-filepdf">
            <FaFilePdf size="100"/>
          </form>
        </button>
        <div class="loader"></div>
      </div>
     </div>
  );
}

export default App;