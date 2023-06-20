/*
import { lightGreen } from '@mui/material/colors';
import React from 'react';

function Input({ password, setPassword }) {
    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    const passwordArray = password.split('')
    console.log(passwordArray);
    const passwordAsciiArray = []
    const passwordAscii = passwordArray.map(letter => passwordAsciiArray.push(letter.charCodeAt()))

    const integer = parseInt(passwordAsciiArray)


    console.log(integer + 5);

    return (
        <div>
            <input onChange={(e) => handleChange(e)} />

        </div>
    );
}

export default Input;

*/