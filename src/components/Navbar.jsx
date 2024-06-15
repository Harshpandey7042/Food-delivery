import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  // Function to get the first name from the user's full name
  const getFirstName = (fullName) => {
    if (fullName) {
      return fullName.split(' ')[0];
    }
    return '';
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 fixed w-full z-20 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-white text-2xl font-extrabold tracking-wider hover:text-yellow-300 transition duration-300">
            <img src="img/mainlogo.jpeg" alt="mainlogo" className="w-12 h-12 rounded-full mr-2" />
            <span className="hidden md:inline">Khao Piyo Jalsa</span>
          </Link>
        </div>
        <div className="md:hidden">
          <HiMenu className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/about-us" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link to="/restaurants-with-delivery" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">Menu</Link>
          <Link to="/blog" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">Blog</Link>
          <Link to="/contact-us" className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300">Contact Us</Link>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <img src={user ? user.picture : ''} alt={user ? user.name : ''} className="w-10 h-10 rounded-full" />
              <p className="text-white font-semibold">{user ? getFirstName(user.name) : ''}</p>
              <button onClick={() => logout({ returnTo: window.location.origin })} className="text-white font-semibold hover:text-yellow-300 transition duration-300">Logout</button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button onClick={() => loginWithRedirect()} className="text-white font-semibold hover:text-yellow-300 transition duration-300">Login</button>
              <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })} className="text-white font-semibold hover:text-yellow-300 transition duration-300">Register</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
