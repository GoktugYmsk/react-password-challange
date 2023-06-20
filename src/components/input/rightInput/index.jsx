import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RightInput({showPassword}) {
    return (
        <div className='rigthInput' >
            <InputGroup value={showPassword} className="mb-3">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <p>{showPassword}</p>
        </div>
    )
}

export default RightInput
