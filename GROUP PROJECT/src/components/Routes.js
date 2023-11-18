import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reservation from './Reservations';
import NavBar from './NavBar';
import HomePage from './Home';
import SignupForm from './SigUp';
import FoodPage from './FoodPage';
import LoginForm from './Login';
import AboutUsPage from './AboutUs';
import ContactUsPage from "./ContactUs";


const Navigation = () => (
    <Router>  
         
        <Routes>

            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/SignUp" element={<SignupForm />} />
            <Route exact path="/Menu" element={<FoodPage />} />
            <Route exact path='/Login' element={<LoginForm />} />
            <Route exact path='/Reservations' element={<Reservation />} />
            <Route exact path='/NavBar' element={<NavBar />} />
            <Route exact path='/AboutUs' element={<AboutUsPage />} />
            <Route exact path ="/Foodspage" element={<FoodPage />} />
            <Route exact path ="ContactUs" element={<ContactUsPage />} />
        

        </Routes>
    </Router>
);

export default Navigation;