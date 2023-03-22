import React from 'react';
import DeleteAccount from '../../MainPage/DeleteAccount/DeleteAccount';
import '../NavBar/NavBar.css';

const NavBar = ({ userInfo, setUserInfo }) => {

  return (  
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#header-div">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#history-div">History</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
        </ul>
            <div className="d-flex" id='del-btn'>
              <DeleteAccount userInfo={userInfo} setUserInfo={setUserInfo} />
            </div>
          
      
      </nav>
  );
};

export default NavBar;