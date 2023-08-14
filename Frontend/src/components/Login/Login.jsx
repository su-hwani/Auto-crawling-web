import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';




export default function Login() {
    return (
        <section className="w-96 h-80 bg-indigo-50 relative left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center rounded-3xl">
            <Header/>
            <Main />
            <Footer />
        </section>
    );
}

