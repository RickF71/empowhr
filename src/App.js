import { useState } from 'react';
import { useNavigate as Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import LoginFail from './LoginFail';
import LoginForgot from './LoginForgot';
import handleShow from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Login.css'

const App = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/login_success`} element={<LoginSuccess />} />
        <Route path={`/login_fail`} element={<LoginFail />} />
        <Route path={`/login_forgot`} element={<LoginForgot />} />
      </Routes>
      <button variant="primary" onClick={handleShow}>Login</button>
      {/* <Login /> */}
    </Router>
  );
};

export default App;