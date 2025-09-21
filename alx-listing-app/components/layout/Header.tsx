// File: components/layout/Header.tsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#">Staycation</a>
        </div>

        {/* Links di navigazione per schermi grandi */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Rooms</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Mansion</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Countryside</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Mega Villa</a>
        </nav>

        {/* Pulsanti di accesso */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-gray-600 hover:text-blue-600">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;