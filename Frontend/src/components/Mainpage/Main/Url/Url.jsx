import React, {useState} from 'react';
import { FaFilePdf } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
import styles from './Url.module.css';

const Url = () => {
    const [FiledivIsOpen, FiledivSetIsOpen] = useState(false);
    const [FileIsLoaded, FileLoadSetIsOpen] = useState(false);
    const ToggleFilediv = () => {
        const Filediv = document.getElementById('File-div');
        if (FiledivIsOpen) {
            console.log(Filediv);
        FiledivSetIsOpen(false);
      } else {
        FiledivSetIsOpen(true);
      }
    }
    return (
    <div>
        <div className={`${styles['URL-div']}`}>
            <h2>Type URL</h2>
            <input className={`${styles['URL-input']}`}></input>
            <button className={`${styles["URL-bttn"]}`} onClick={ToggleFilediv}> Go!</button>
        </div>
        <div className={`${styles["File-div"]} + ${FiledivIsOpen === true ? styles['active'] : styles['close']}`} id="File-div">
            <h2 className={`${styles['File-h2']}`}>File Download</h2>
            <button className={`${styles['download-bttn']}`}>
            <form className={`${styles['fa-filepdf']}`}>
                <FaFilePdf size="100"/>
            </form>
            </button>
        <div className={`${styles['loader']}`}></div>
        </div>
    </div>
    );
}

export default Url;