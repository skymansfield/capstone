import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import '../Main/Main.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import History from '../History/History';
import AllBlogs from '../../MainPage/AllBlogs/AllBlogs';
import Search from '../../Search/Search';

const Mainpage = ({ blogPost, setBlogPost }) => {

  const [blogList, setBlogList] = useState([]);
  const [comment, setComment] = useState([]);

  const getBlogs = async () => {
    const res = await axios('http://localhost:5000/getBlogs');
    setBlogList(res.data.sort((a, b) => a.blogName > b.blogName ? 1 : -1));
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div id='bg-color'>
      <NavBar />
      <Header />
      <History />
      <h1 className='comment-h1'>Comment on your favorite band:</h1>
      <AllBlogs
        getBlogs={getBlogs}
        blogList={blogList}
        setBlogList={setBlogList}
        comment={comment}
        setComment={setComment}
      />
      <BlogPost
        blogPost={blogPost}
        setBlogPost={setBlogPost}
        getBlogs={getBlogs}
      />
      {/* <Search/> */}
      <Footer />
    </div>
  );
};

export default Mainpage;