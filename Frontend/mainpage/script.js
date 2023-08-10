import React, { useState, useRef } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";
import { FaReact, FaFilePdf } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";



const App = () => {
  const buttonRef = useRef();
  const [FiledivIsOpen, FiledivSetIsOpen] = useState(false);
  const [LogindivIsOpen, LogindivSetIsOpen] = useState(false);
  const ToggleFilediv = () => {
    const Filediv = document.getElementById('File-div');
    if (FiledivIsOpen) {
      FiledivSetIsOpen(false);
    } else {
      FiledivSetIsOpen(true);
    }
  };
  const ToggleLogindiv = () => {
    const Logindiv = document.getElementById('Login-div');
    if (LogindivIsOpen) {
      LogindivSetIsOpen(false);
      console.log(Logindiv);
    } else
    {
      LogindivSetIsOpen(true);
      console.log(Logindiv);
    }
  };
  return /*#__PURE__*/(
    React.createElement("div", { className: "Testpage" }, /*#__PURE__*/
    React.createElement("div", { className: "Top" }, /*#__PURE__*/
    React.createElement("div", { className: "logo-div" }, /*#__PURE__*/
    React.createElement("form", { className: "fa-react" }, /*#__PURE__*/
    React.createElement(FaReact, { size: "40", color: "000" }))), /*#__PURE__*/


    React.createElement("div", { className: "title-div" }, /*#__PURE__*/
    React.createElement("h1", null, "Auto Crawling")), /*#__PURE__*/

    React.createElement("div", { className: "Login-div" }, /*#__PURE__*/
    React.createElement("button", { className: "bttn Login-bttn", onClick: ToggleLogindiv }, "Log-in"), /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("div", { className: `Login-popup ${LogindivIsOpen == true ? 'active' : 'close'}`, id: "Login-div" }, /*#__PURE__*/
    React.createElement("h2", null, "Login Popup"), /*#__PURE__*/
    React.createElement("div", { className: "ID" }, /*#__PURE__*/
    React.createElement("h3", null, " ID "), /*#__PURE__*/
    React.createElement("input", { className: "ID-input" })), /*#__PURE__*/

    React.createElement("div", { className: "PW" }, /*#__PURE__*/
    React.createElement("h3", null, " PW "), /*#__PURE__*/
    React.createElement("input", { className: "PW-input" })))))), /*#__PURE__*/





    React.createElement("div", { className: "URL-div" }, /*#__PURE__*/
    React.createElement("h2", null, "Type URL"), /*#__PURE__*/
    React.createElement("input", { className: "URL-input" }), /*#__PURE__*/
    React.createElement("button", { className: "bttn URL-bttn", onClick: ToggleFilediv }, " Go!")), /*#__PURE__*/

    React.createElement("div", { className: `File-div ${FiledivIsOpen == true ? 'active' : 'close'}`, id: "File-div" }, /*#__PURE__*/
    React.createElement("h2", null, "File Download"), /*#__PURE__*/
    React.createElement("button", { className: "bttn download-bttn" }, /*#__PURE__*/
    React.createElement(FaFilePdf, { size: "100" })))));




};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));