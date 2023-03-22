import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../FormComment/FormComment.css';

const FormComment = ({ getBlogs, _id, setOpen, onFormClose, comment, setComment }) => {

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setComment({
      ...comment,
      [name]: value
    });
  };

  const axiosHandler = (e) => {
    comment.username = JSON.parse(localStorage.getItem('user')).username;
    comment.blogId = _id;
    e.preventDefault();
    axios.post('http://localhost:5000/createComment', comment).then((response) => {
      document.getElementById("comment").value = "";
      setOpen({
        isOpen: false
      });
      getBlogs();
      navigate(response.data.redirectUrl);
    });
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <input type='textarea' size='auto' wrap='soft' id='comment' name='comment' placeholder='Comment on this band' onChange={handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button type='submit' className='btn btn-block com-sub-btn' id='sub-btn'onClick={axiosHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FormComment;