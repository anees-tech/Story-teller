import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AuthSection = () => {
  const [activeComponent, setActiveComponent] = useState('Login');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-slate-700 py-10 flex justify-center flex-col items-center mx-auto w-full">
        <div className="buttons flex gap-4">
          <button
            onClick={() => setActiveComponent('Login')}
            className={`px-5 py-3 ${activeComponent === 'Login' ? 'bg-blue-300 text-gray-800' : 'bg-gray-300 text-gray-500'} rounded-2xl font-semibold hover:bg-gray-100 transition duration-150 hover:text-black active:bg-slate-800 active:text-white`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveComponent('Register')}
            className={`px-5 py-3 ${activeComponent === 'Register' ? 'bg-blue-300 text-gray-800' : 'bg-gray-300 text-gray-500'} rounded-2xl font-semibold hover:bg-gray-100 transition duration-150 hover:text-black active:bg-slate-800 active:text-white`}
          >
            Register
          </button>
        </div>
        <div className="rendered-component">{renderComponent()}</div>
      </div>
      <Footer/>
    </div>
  );
};

export default AuthSection;
