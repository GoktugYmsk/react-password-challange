import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './index.css'

function RightInput({ rightInput }) {

  return (
    <div className="rightInput">
      <InputGroup className="mb-3">
        <Form.Control
          value={rightInput}
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
}

export default RightInput;
