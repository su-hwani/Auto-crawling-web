import React from 'react';
import Header from '../Join/Header/Header';
import Main from '../Join/Main/Main'
import Footer from '../Join/Footer/Footer';
import styles from './Join.module.css';



export default function Join() {
    return (
        <section className={styles.section}>
            <Header />
            <Main />
            <Footer />
        </section>
    );
}

