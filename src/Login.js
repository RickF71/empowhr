import React, { useState, useEffect } from 'react';
import { useNavigate as navigate } from 'react-router-dom';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import mars1 from './assets/mars1.png';
import empowhr from './assets/empowhr-logo-01.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

//import { useNavigate } from 'react-router-dom';

const USERNAME = 'richard'
const PASSWORD = 'password'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, such as sending data to a server
    // if (username==USERNAME && password==PASSWORD && email==EMAIL) {
    if (username === USERNAME) {
      navigate('/login_success')
    } else {
      // this.setState({ error: 'Invalid username or password.' })
      navigate('/login_failure')
    }
    this.setState({ loading: false });
  }

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Clear the username and password state when the component unmounts
    return () => {
      setUsername('');
      setPassword('');
    };
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><img src={mars1} alt="empowhr"  width="100px;" /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign:'center', marginTop:'1em'}}><img src={empowhr} alt="mars" className="mars-1" width="360px;" /></p>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formUsername">
              <Form.Label column sm="2" visuallyHidden>Username</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control type="text" placeholder="Username" />
                <InputGroup.Text style={{fontSize:'larger'}}><BsFillPersonFill  /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <br />
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2" visuallyHidden>Password</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control type="password" placeholder="Password" />
                <InputGroup.Text style={{fontSize:'larger'}}><MdOutlineVisibilityOff /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <br />
            <p style={{textAlign:'right', fontSize:'small',}}><a href="#">Forgot password?</a></p>
            <br />
            <button type="submit" id="btn-login">LOGIN</button>

          </Form>

          {/* <em>Use 'richard' for username, blank password</em> */}
          <p></p>
        </Modal.Body>

        <Modal.Footer closeButton>
          <Modal.Title>&copy;MARS Solutions Group</Modal.Title>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
