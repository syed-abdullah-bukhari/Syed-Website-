import React , { useState } from 'react'

export default function CodeBase () {

    const[name , SetName] = useState('Khuzaima Khan');

    const UpdateName = () => 
    {
        SetName('Syed Abdullah Bukhari');
    }

    return(
        <div>
            <h3>Name : {name}</h3>
            <button onClick={UpdateName}>Set Name:  </button>
        </div>
    )

}

