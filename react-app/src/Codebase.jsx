import React , { useState } from 'react'
import './CodeBase.css';

export default function CodeBase () {

    const[name , SetName] = useState('Khuzaima Khan');

    const OnHandleClick = ()  => {
        SetName('Syed Abdullah Bukhari');
    }

    return(
        <div className='Container glass'>
            <h3>Name : {name}</h3>
            <button className='Glowing-btn' onClick={UpdateName}>Set Name </button>
        </div>
    )

}

