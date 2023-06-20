import React from 'react';
import Button from 'react-bootstrap/Button';

function AltButton({ showPassword, setShowPassword }) {
    const decreaseAsciiNumbers = () => {
        const passwordAsInteger = parseInt(showPassword, 10);
        if (!isNaN(passwordAsInteger)) {
            const modifiedInteger = passwordAsInteger - 5;
            setShowPassword(modifiedInteger.toString());
        }
    };

    return (
        <div>
            <Button onClick={decreaseAsciiNumbers}>Şifreyi çöz</Button>
        </div>
    );
}


export default AltButton;
