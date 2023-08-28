import React from 'react';
import styles from './Title.module.css';

export default function Title(){
    return (
        <div className={`${styles['title-div']}`}>
         <h1>Auto Crawling</h1>
       </div>
    );
}