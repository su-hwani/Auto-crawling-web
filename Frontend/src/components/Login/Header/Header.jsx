import React from 'react';
import {BiLogIn} from 'react-icons/bi';

export default function Header() {
    return (
    <>
        <div className='w-full box-border border-b-2 border-myGray border-solid'> 
        <header>
        <ul className='flex items-center'>
            <li>
            <BiLogIn size="20"/>
            </li>&nbsp;
            <li>
            <h1>로그인</h1>
            </li>
        </ul>
        </header>
        </div>
    </>
    );
}

