import { Link } from "react-router-dom";
import React, { useState } from "react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-5 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="text-3xl font-bold mr-4 sm:text-4xl bg-sky-300 rounded-md p-2">
            <img className="h-10 w-auto" src={logo} alt="logo" />
          </div>
          <ul className="hidden md:flex">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Home
            </Link>
            <Link
              to="bucket"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Bucket
            </Link>
            <Link
              to="about"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              About
            </Link>
            <Link
              to="blog"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Blog
            </Link>
            <Link
              to="team"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Team
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-10">
          <Link
            to="register"
            className="block text-md px-4 py-2 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md ml-2 font-bold  mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Register
          </Link>

          <Link
            to="login"
            className="block text-md  text-md px-4 py-2 text-gray-800 border bg-transparent border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md ml-2 font-bold  mt-4 hover:bg-blue-700 lg:mt-0"
          >
            login
          </Link>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-4"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="bucket"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Bucket
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="blog"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Blog
          </Link>
          
        </li>

        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="team"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Team
          </Link>
          
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            <Link onClick={handleClose} to="login">
              Login
            </Link>
          </button>
          <button className="px-8 py-3">
            <Link onClick={handleClose} to="register">
              Register
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
