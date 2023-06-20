import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function LeftInput({setPassword}) {

    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div>
            <InputGroup onChange={handleChange} className="mb-3">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    )
}

export default LeftInput