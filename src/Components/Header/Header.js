import React from 'react';
import CustomLink from '../CustomLinks/CustomLink';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='header-nav'>
      <CustomLink className='single-nav' to="/">Home</CustomLink>
      <CustomLink className='single-nav' to="/reviews">Reviews</CustomLink>
      <CustomLink className='single-nav' to="/dashbroad">Dashbroad</CustomLink>
      <CustomLink className='single-nav' to="/blogs">Blogs</CustomLink>
      <CustomLink className='single-nav' to="/about">About</CustomLink>

      </nav>
    </div>
  );
};

export default Header;