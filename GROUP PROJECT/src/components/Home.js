import { Link } from 'react-router-dom';
import './Home.css'
import React from 'react'
import NavBar from './NavBar';

function HomePage(){

    
    return(
        <div>
            <NavBar />
        <div className='Container'>
            
            <div className='home'>
                <img className='img1' src='https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Food Image-'/>
                
            </div>
            <div className='Heading'>
                 <h3 className='heading3'>Welcome to Loyalty Restaurant</h3>
                 <p> "Indulge your senses in a culinary journey of flavors at Loyalty Restaurant.
                     Where every dish is a masterpiece, and every moment is a celebration of exquisite taste.
                      Welcome to a world where passion meets plate,
                     and every dining experience is a symphony of satisfaction.</p>
                     <Link to='/SignUp'>
                     <button  className='signUp'>Sign Up</button>
                     </Link>
            </div>
        </div>
        </div>
    )
}

  

export default HomePage;