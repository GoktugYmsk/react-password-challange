import React from 'react';

import Button from 'react-bootstrap/Button';

import './index.css'

function AltButton({ leftInput, setRightInput }) {

    const handleLowerButton = () => {
        const updatedText = [...leftInput].map((char) => {
            const asciiCode = char.charCodeAt(0) - 5;
            return asciiCode.toString();
        });
        setRightInput(updatedText.join(' '));
    };

    return (
        <div>
            <Button className='altButton' onClick={handleLowerButton}>Şifreyi çöz</Button>
        </div>
    );
}

export default AltButton;
