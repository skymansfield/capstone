import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../BlogPost/BlogPost.css';

const BlogPost = ({ blogPost, setBlogPost, getBlogs }) => {

  const navigate = useNavigate();

  const username = JSON.parse(localStorage.getItem('user')).username;

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setBlogPost({
      ...blogPost,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    blogPost.username = username;
    e.preventDefault();
    axios.post('http://localhost:5000/createPost', blogPost).then((response) => {
      navigate(response.data.redirectUrl);
      getBlogs();
    });
  };

  return (
    <div className='container-fluid text-center'>
      <div className='row'>
        <div className='col title'>
          <h2 id='blog'>Start a New Band Blog</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Band Name' name='blogName' onChange={handleChange} className='band' />
          <input type='text' name='username' onChange={handleChange} hidden />
        </div>
      </div>
      <div className='row sub'>
        <div className='col'>
          <button type='submit' className='btn sub-btn' onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;