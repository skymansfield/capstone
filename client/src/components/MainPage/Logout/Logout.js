import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Logout/Logout.css'

const Logout = () => {

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:5000/logout').then((response) => {
      localStorage.setItem("user", null);
      navigate(response.data.redirectUrl);
    });
  };
  return (
    <div className='logout'>
      <a onClick={logoutHandler} href='#' id='log'>Log Out</a>
    </div>
  );
};

export default Logout;