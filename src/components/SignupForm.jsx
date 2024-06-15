import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {auth} from '../firebase-config' ;

const SignupForm = () => {

  const [registerUsername,setRegisterUsername] = useState("");
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");
  const register = async() =>{
   try{
    const user = await createUserWithEmailAndPassword(auth,  registerEmail,registerPassword);
    console.log(user)
   }catch (error){
    console.log(error.message);
   }


  }
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-md shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-white font-semibold">Username</label>
          <input
            type="text"
            onChange={(event)=>{setRegisterUsername(event.target.value);}}
            id="username"
            name="username"
            className="mt-1 p-3 w-full border border-transparent rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white text-gray-800"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-semibold">Email</label>
          <input
            type="email"
            onChange={(event)=>{setRegisterEmail(event.target.value);}}
            id="email"
            name="email"
            className="mt-1 p-3 w-full border border-transparent rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white text-gray-800"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-white font-semibold">Password</label>
          <input
            type="password"
            onChange={(event)=>{setRegisterPassword(event.target.value);}}
            id="password"
            name="password"
            className="mt-1 p-3 w-full border border-transparent rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white text-gray-800"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-white font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-3 w-full border border-transparent rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-white text-gray-800"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          onClick={register}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6">
        <p className="text-center text-white">or sign up with</p>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-800" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
          </button>
          <button className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPhone} className="text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
