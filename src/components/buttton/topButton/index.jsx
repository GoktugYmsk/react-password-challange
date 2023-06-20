import React from 'react'

import Button from 'react-bootstrap/Button';

function TopButton({password,setShowPassword}) {


    const increaseAsciiNumbers = () => {
        const modifiedPassword = Array.from(password).map((char) => {
            const ascii = char.charCodeAt(0);
            const modifiedAscii = ascii + 5;
            setShowPassword(modifiedAscii)
            return String.fromCharCode(modifiedAscii);
        });

        const modifiedPasswordString = modifiedPassword.join('');
        console.log(modifiedPasswordString);
    };

    return (
        <div>
            <Button onClick={increaseAsciiNumbers}>Şifrele</Button>
        </div>
    )
}

export default TopButton