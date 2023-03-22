import React, { useState } from 'react';
import Register from './components/Frontpage/Register/Register';
import Login from './components/Frontpage/Login/Login';
import Mainpage from './components/MainPage/Main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChangePassword from './components/Frontpage/ChangePassword/ChangePassword';
import './App.css';

function App() {

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    psw_repeat: '',
    message: '',
    login: false
  });

  const [blogPost, setBlogPost] = useState({
    username: '',
    blogName: '',
    content: ''
  });

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path='/' element={<Login userInfo={userInfo} setUserInfo={setUserInfo} />} />

          <Route exact path='/register' element={<Register userInfo={userInfo} setUserInfo={setUserInfo} />} />

          <Route exact path='/main' element={<Mainpage userInfo={userInfo} setUserInfo={setUserInfo} blogPost={blogPost} setBlogPost={setBlogPost} />} />

          <Route exact path='/change' element={<ChangePassword userInfo={userInfo} setUserInfo={setUserInfo} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;