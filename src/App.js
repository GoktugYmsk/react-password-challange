import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LeftInput from './components/input/leftInput';
import RightInput from './components/input/rightInput';
import TopButton from './components/buttton/topButton';
import AltButton from './components/buttton/altButton';

import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('')

  return (
    <div className="App">
      <Row>
        <Col lg={4}>
          <LeftInput setPassword={setPassword} showPassword={showPassword} />
        </Col>
        <Col lg={4}>
          <TopButton password={password} setShowPassword={setShowPassword} />
          <AltButton setShowPassword={setShowPassword} password={password} showPassword={showPassword} />
        </Col>
        <Col lg={4}>
          <RightInput showPassword={showPassword} />
        </Col>
      </Row>
    </div >
  );
}

export default App;
