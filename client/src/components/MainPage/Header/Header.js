import React from 'react';
import headerimg from '../../../assets/images/bandplaying.PNG';
import '../Header/Header.css';

const Header = () => {

  const username = JSON.parse(localStorage.getItem("user")).username;

  return (
    <div id='header-div'>
      <h1 className='text-center text-danger'>I LOVE PUNK ROCK!!</h1>
      <h1 className='text-center text-danger' id='user'>hi  {username}</h1>
      <img src={headerimg} alt='band' id='band' />
    </div>
  );
};

export default Header;