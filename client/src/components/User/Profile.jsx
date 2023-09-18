import React from 'react';

export default function Profile({photoURL, displayName}) {
    console.log(photoURL);
    return (
        <span>
        <div className='flex items-center'>
            <img className="rounded-full w-11 h-11" 
            src={photoURL} 
            alt={displayName} />
            <span className='font-bold decoration-blackBttn'>{displayName}</span>
        </div>&nbsp;
        </span>
    );
}

