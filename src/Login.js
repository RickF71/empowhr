import React, { useState, useEffect } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import mars1 from './assets/mars1.png';
import empowhr from './assets/empowhr-logo-01.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const USERNAME = 'username'
const PASSWORD = 'password'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target['formUsername'].value
    const password = event.target['formPlaintextPassword'].value

    if (username === USERNAME && password === PASSWORD) {
      console.log('SUCCESS login.  Username:' + username)
    } else {
      console.log('FAILED login.  Username:' + username )  
    }
    handleClose()
  }

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title><img src={mars1} alt="empowhr"  width="100px;" /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign:'center', marginTop:'1em'}}><img src={empowhr} alt="mars" className="mars-1" width="360px;" /></p>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Form.Label column sm="2" visuallyHidden>Username</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control type="text" placeholder="Enter username here" />
                <InputGroup.Text style={{fontSize:'larger'}}><BsFillPersonFill /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <br />
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2" visuallyHidden>Password</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control type="password" placeholder="Enter password here" />
                <InputGroup.Text style={{fontSize:'larger'}}>
                  <MdOutlineVisibilityOff />
                  {showPassword ? <MdOutlineVisibility /> : null}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <br />
            <p style={{textAlign:'right', fontSize:'small',}}><a href="#">Forgot password?</a></p>
            <br />
            <button type="submit" id="btn-login">LOGIN</button>

          </Form>

          {/* <em>Use 'username' for username, blank password</em> */}
          <p></p>
        </Modal.Body>

        <Modal.Footer>
          <Modal.Title>&copy;MARS Solutions Group</Modal.Title>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
