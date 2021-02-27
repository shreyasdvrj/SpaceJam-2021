import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import land from '../img/landing.png';
import './Home.css';

function Home() {
  return (
    <section className='hero'>
        
      <div className='lander'>
      
        <h1 id='header'>PITCH PERFECT</h1>
       <br/>
        <div className='typewrite'>
          <span className='typewrite-text'>A great presentation gives smart ideas an advantage</span>
        </div>

      </div>
      
      <img className="Home_Land" src={land} alt="Logo" />
      <div className="User">
        <span id="text">Are you a student?</span>
        <br/>
          <button type='button login-button' id='button1'>
            Sign Up
          </button>
      </div>

      <div className="Mentor">
        <span id="text">Want to mentor?</span>
        <br/>
          <button type='button login-button' id='button1'>
            Join Now
          </button>
      </div>
    </section>
  );
}

export default Home;
