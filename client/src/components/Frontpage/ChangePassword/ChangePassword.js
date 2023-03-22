import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ChangePassword = ({ userInfo, setUserInfo }) => {

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
    if (userInfo.newpassword !== userInfo.psw_repeat) {
      alert('The Passwords DO NOT MATCH');
    } else {
      axios.post('http://localhost:5000/change', userInfo).then((response) => {
        console.log("RES", response);
        if (response.data.success) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate(response.data.redirectUrl, userInfo);
        } else {
          console.log(response.data);
        }
      });
    }
  };

  return (
    <div id='bg'>
      <div className="title d-inline-flex">
        <div className="i p-2 ">I</div>
        <div className="heart p-2 "></div>
        <div className="punk p-2 ml-4">Punk Rock!</div>
      </div>
    <div className="can">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="/change">Change Password</a>
        </li>
        <li className="nav-item">
          <a className="nav-link red" data-bs-toggle="tab" href="/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link red" data-bs-toggle="tab" href="/register">Register</a>
        </li>
      </ul>
      <div className="container">
        <form >
          <div className="heading tab-content">
            <h1><b>Change Password</b></h1>
          </div>
          <div className="tab-pane container active">
            <input type="text" placeholder="Enter Username" name="username" className='input' required onChange={handleChange} autoComplete="on" />
            <br />
            <input type="password" placeholder="Enter Password" name="password" className='input' required onChange={handleChange} autoComplete="on" />
            <br />
            <input type="password" placeholder="Enter New Password" name="newpassword" className='input' required onChange={handleChange} autoComplete="on" />
            <br />
            <input type="password" placeholder="Repeat New Password" name="psw_repeat" className='input' required onChange={handleChange} autoComplete="on" />
            <br />
            <button type="submit" className='input btn-danger' onClick={submitHandler}>Change Password</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ChangePassword;