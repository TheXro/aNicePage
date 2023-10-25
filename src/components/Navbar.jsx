import React from "react";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nleft'>
        <img src='./raybanlogo.png' alt='' />
        <a href=''>products</a>
        <a href=''>about</a>
      </div>
      <div className='nright'>
        <a href=''>cart</a>
        <a href=''>pricing</a>
      </div>
    </div>
  );
};

export default Navbar;
