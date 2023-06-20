import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LeftInput from './components/input/leftInput';
import RightInput from './components/input/rightInput';
import TopButton from './components/buttton/topButton';
import AltButton from './components/buttton/altButton';

import './App.css'

function App() {
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');

  return (
    <div className="App">
      <Row>
        <Col sm={4} md={4} lg={4}>
          <LeftInput leftInput={leftInput} setLeftInput={setLeftInput} />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <TopButton leftInput={leftInput} setRightInput={setRightInput} />
          <AltButton leftInput={leftInput} setRightInput={setRightInput} />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <RightInput rightInput={rightInput} />
        </Col>
      </Row>
    </div >
  );
}

export default App;

