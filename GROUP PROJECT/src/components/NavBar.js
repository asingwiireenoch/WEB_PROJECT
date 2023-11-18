// NavBar.js
import React from 'react';
import './NavBar.css'
import { Link , useNavigate} from 'react-router-dom';

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h1>
          Loyalty <span className='span1'>Restaurant</span>
        </h1>
        <ul className='List'>
          {/* <li onClick={()=>navigate('/')}>
            Home
          </li> */}
          <li onClick={()=>navigate('/AboutUs')}>
            About Us
          </li>
          <li onClick={()=>navigate('/SignUp')}>
              Sign Up
          </li>
          <li onClick={()=>navigate('/Login')}>
            Log In
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
