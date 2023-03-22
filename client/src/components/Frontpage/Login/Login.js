import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Login/Login.css";

const Login = ({ userInfo, setUserInfo }) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/', userInfo).then((response) => {
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate(response.data.redirectUrl, userInfo);
      } else {
        console.log(response.data);
      }
    });
  };

  return (
    <div id='bg'>
      <div className="title d-inline-flex">
        <div className="i p-2 ">I</div>
        <div className="heart p-2 "></div>
        <div className="punk p-2 ml-4">Punk Rock!</div>
      </div>
      <div className="can">
        <ul className="nav nav-tabs" id='log-tab'>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link red" data-bs-toggle="tab" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link red" data-bs-toggle="tab" href="/change">Change Password</a>
          </li>
        </ul>
        <form>
          <div className="heading tab-content log">
            <h1><b>Please Login </b></h1>
          </div>
          <div className="tab-pane container active">
            <input type="text" placeholder="Enter Username" className='input' name="username" onChange={handleChange} required />
            <br />
            <input type="password" placeholder="Enter Password" name="password" className='input' onChange={handleChange} required />
            <br />
            <button type="submit" className='input btn-danger' onClick={submitHandler}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;