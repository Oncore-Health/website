"use client";

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between p-4 bg-white px-8 pt-4">
        {/* Logo Section */}
        <a href="/">
        <div className="flex items-center space-x-2">
          <img src="/oncare.png" alt="Oncore AI Logo" className="h-6" />
          <span className="text-2xl font-bold text-black">Oncare</span>
          <img src="/ai.svg" alt="AI rectangle" className="h-6" />
        </div>
        </a>

        {/* Custom Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger Icon */}
            <div className="relative flex flex-col justify-between h-6 w-8">
              {/* Top Line */}
              <span
                className={`block h-1 w-full bg-black transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              ></span>
              {/* Middle Line */}
              <span
                className={`block h-1 w-full bg-black transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              {/* Bottom Line */}
              <span
                className={`block h-1 w-full bg-black transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation for Larger Screens */}
        <div className="hidden lg:flex items-center justify-between space-x-8">
          <nav className="flex items-center space-x-10">
            {/*<div className="relative group text-md">
              <div className="flex items-center py-2 cursor-pointer">
                <a href="#" className="text-black">Clinical Operations Platform</a>
                <IoIosArrowDown className="inline-block ml-1 text-primary transition-transform duration-200 group-hover:rotate-180" />
              </div>*/}
              {/* Dropdown Menu for Larger Screens */}
              {/*<div className="absolute w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 hidden z-10">
                <a href="/infusion" className="block px-4 py-2 hover:text-primary">AI Infusion Platform</a>
              </div>
            </div>*/}
            
            <a href="/infusion" className="text-md text-black hover:text-primary">AI Infusion Platform</a>
            <a href="/#use-cases" className="text-md text-black hover:text-primary">Use Cases</a>
            {/* <a href="/#" className="text-md text-black hover:text-primary">Who We Serve</a> */}
            <div className="relative group text-md">
            {/* The link with dropdown trigger */}
            <div className="flex items-center py-2 cursor-pointer">
              <a href="/#" className="text-black">Who We Serve</a>
              {/* Arrow indicator for dropdown */}
              <IoIosArrowDown className="inline-block ml-1 text-primary transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute w-48 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200 hidden z-10">
              <a href="/aicOperations" className="block px-4 py-2 hover:text-primary">AICs</a>
              <a href="/ccOperations" className="block px-4 py-2 hover:text-primary">Cancer Centers</a>
            </div>
          </div>
            <a href="/#integrations" className="text-md text-black hover:text-primary">Integrations</a>
            <a href="/about" className="text-md text-black hover:text-primary">About Us</a>
            <a href="/careers" className="text-md text-black hover:text-primary">Careers</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://platform.useoncare.com" className="border border-button text-button font-medium px-4 py-2 rounded-full hover:bg-button hover:text-white transition">
              Log In
            </a>
            <a href="mailto:abhinav@useoncare.com" className="bg-button text-white font-medium px-4 py-2 rounded-full hover:bg-darker transition">
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center bg-white w-full p-4 lg:hidden">
          {/* Mobile Navigation */}
          <nav className="space-y-4 text-center">
            {/* Dropdown for Mobile */}
            {/*<div className="relative">
              <button onClick={toggleDropdown} className="flex items-center justify-center w-full text-black">
                Clinical Operations Platform
                <IoIosArrowDown className={`ml-1 text-primary transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <a href="/infusion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary">AI Infusion Platform</a>
                </div>
              )}
            </div>*/}
            <a href="/infusion" className="block text-md text-black hover:text-primary">AI Infusion Platform</a>
            <a href="/#use-cases" className="block text-md text-black hover:text-primary">Use Cases</a>
            <a href="/#" className="block text-md text-black hover:text-primary">Who We Serve</a>
            <a href="/#integrations" className="block text-md text-black hover:text-primary">Integrations</a>
            <a href="/#built-by" className="block text-md text-black hover:text-primary">About Us</a>
            <div className="mt-4">
              <a href="https://platform.useoncare.com" className="block w-full text-center border border-button text-button font-medium px-4 py-2 rounded-full hover:bg-button hover:text-white transition mb-4">Log In</a>
              <a href="mailto:abhinav@useoncare.com" className="block w-full text-center bg-button text-white font-medium px-4 py-2 rounded-full hover:bg-darker transition">Schedule a Demo</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
