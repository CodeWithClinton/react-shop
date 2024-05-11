import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 w-full z-10">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          SHOPPIT
        </span>
      </Link>
  
      <Link to="/cart">
        <div className="h-20 w-20 border-white flex items-center justify-center relative cursor-pointer">
          <FaCartShopping className="text-white text-4xl"/>

        </div>
      </Link>
    </div>
  </nav>
  )
}

export default NavBar