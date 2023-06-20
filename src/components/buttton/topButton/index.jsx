import React from 'react'

import Button from 'react-bootstrap/Button';

import './index.css'

function TopButton({ leftInput, setRightInput }) {

  const handleUpperButton = () => {
    const updatedText = [...leftInput].map((char) => {
      const asciiCode = char.charCodeAt(0) + 5;
      return asciiCode.toString();
    });
    setRightInput(updatedText.join(' '));
  };

  return (
    <div  >
      <Button className='topButton' onClick={handleUpperButton} >Şifrele</Button>
    </div>
  )
}

export default TopButton
