// NavBar.js
import React from 'react';
import './HomeNavbar.css'
import { Link , useNavigate} from 'react-router-dom';

const HomeNavBar = () => {
  const navigate=useNavigate()
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h1>
          Loyalty <span className='span1'>Restaurant</span>
        </h1>
        <ul className='List'>
          <li onClick={()=>navigate('/Foodspage')}>
            Home
          </li>
          <li onClick={()=>navigate('/AboutUs')}>
            About
          </li>
          <li onClick={()=>navigate('/ContactUs')}>
            Contact Us
          </li>
          <button onClick={()=>navigate('/')} className='logoutBttn' >
            LOG OUT
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavBar;
