import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../DeleteAccount/DeleteAccount.css'

const DeleteAccount = () => {

  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/delete', JSON.parse(localStorage.getItem('user'))).then((response) => {
      localStorage.setItem("user", null);
      navigate(response.data.redirectUrl);
    });
  };

  return (
    <div>

      <a className='nav-link del' onClick={deleteHandler} href='#'>Delete Account</a>
    </div>
  );
};

export default DeleteAccount;