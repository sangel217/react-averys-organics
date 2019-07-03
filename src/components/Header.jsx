import React from 'react';
import { Link } from 'react-router-dom';
import producePic from '../assets/images/produce.jpeg';

function Header(){
  return (
    <div>
      <style jsx>{`
      div {
        background-color: #DEB887;
      }
      `}</style>
      <h1>Welcome to Avery's Organics</h1>
      <img src={producePic}/>
      <br/>
      <Link to="/">Home</Link> | <Link to="/produce">Check Out the Available Produce by Month</Link>
    </div>
  );
}

export default Header;