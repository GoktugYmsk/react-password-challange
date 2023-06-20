import React from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './index.css'

function LeftInput({ setLeftInput }) {

    return (
        <div className='leftInput' >
            <InputGroup
                onChange={(e) => setLeftInput(e.target.value)} className="mb-3">
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    )
}

export default LeftInput