import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-slate-200 shadow-md ">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className="font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-bold">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <h1>
              <span className="text-slate-500">Land</span>
              <span className="text-slate-700">Luxe</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-1">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-bold text-slate-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-bold text-slate-700">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control bg-slate-100 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-transparent"
            />
          </div>
          <div>
            <ul className="menu menu-horizontal  px-1">
              <li>
                <Link to="/signin" className="font-bold btn text-slate-100">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          {/* <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
