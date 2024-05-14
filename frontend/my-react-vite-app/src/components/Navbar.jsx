import React from "react";
import logo from "../assets/patisserilogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <header
      className=" h-[130px] sticky top-0  antialiased
    bg-gradient-to-r
    from-black
    via-amber-700
    to-white z-50"
    >
      <nav className="flex justify-between items-center ">
        <NavLink to="/" activeClassName="active" exact={true}>
          <img
            src={logo}
            alt="logo img"
            className="h-[140px] w-[150px] pb-[15px]"
          />
        </NavLink>
        <ul className="flex justify-center items-center cursor-pointer gap-[20px]  pr-[20px]  ">
          <NavLink to="/" activeClassName="active" exact={true}>
            <li className="w-32   tracking-wide text-gray-800 font-bold rounded border-b-4 border-orange-600 hover:border-orange-600 hover:bg-orange-300 hover:text-white hover:shadow-md py-2 px-6 inline-flex items-cente">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" activeClassName="active" exact={true}>
            <li className="w-32  tracking-wide text-gray-800 font-bold rounded border-b-4 border-orange-700 hover:border-orange-700 hover:bg-orange-600 hover:text-white hover:shadow-md py-2 px-6 inline-flex items-cente">
              About
            </li>
          </NavLink>
          <NavLink to="/menu" activeClassName="active" exact={true}>
            <li className="w-32 tracking-wide text-gray-800 font-bold rounded border-b-4 border-amber-600 hover:border-amber-600 hover:bg-amber-500 hover:text-white hover:shadow-md py-2 px-6 inline-flex items-cente">
              Menu
            </li>
          </NavLink>

          <NavLink to="/contact" activeClassName="active" exact={true}>
            <li className="w-32  tracking-wide text-gray-800 font-bold rounded border-b-4 border-amber-700 hover:border-amber-700 hover:bg-amber-600 hover:text-white hover:shadow-md py-2 px-6 inline-flex items-cente ">
              Contact
            </li>
          </NavLink>
        </ul>
      </nav>
      {/* <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg> */}
      {/* <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16 fa-9x"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg> */}
      {/* <svg class="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-shopping-cart fa-w-18 fa-9x"><path fill="currentColor" d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg> */}
    </header>
  );
};

export default Navbar;
