
import React, { useState, useRef } from 'react';
import { FaReact, FaUserCircle, FaHistory, FaRegStar, FaFilePdf, FaCog, FaQuestionCircle } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
import "./Mainpage.module.css";
import Menu from './Header/Menu/Menu';
import Title from './Header/Title/Title';
import Login from './Header/Login-bttn/Login-bttn';
import Url from './Main/Url/Url';

const App = () => {
  const [FiledivIsOpen, FiledivSetIsOpen] = useState(false);
  const [LogindivIsOpen, LogindivSetIsOpen] = useState(false);
  const [FileIsLoaded, FileLoadSetIsOpen] = useState(false)
  

    const LoadedFile = () => {
        if (FileIsLoaded) {
            FileLoadSetIsOpen(false);
        }
        else {
            FileLoadSetIsOpen(true);
        }
    }
  return(
    
    <div>
    <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
      <div className="Top border-2 w-screen h-20">
       <section className="Menu">
         <Menu/>
       </section>
       <Title/>
       <Login/>
       
      </div>
      <Url/>
     </div>
     
  );
}

export default App;