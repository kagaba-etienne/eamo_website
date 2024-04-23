"use client";
import { Close, Menu } from "@mui/icons-material";
import { Fade, IconButton } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <nav className="flex gap-10 justify-between items-center max-w-5xl mx-auto py-10 max-lg:p-10 text-white">
      <div className="logo text-4xl font-bold drop-shadow-2xl text-forest_green">
        <Link href="/">EAMO</Link>
      </div>
      <ul className="sections flex text-xl max-md:hidden">
        <li className="px-2 lg:px-5 group">
          <Link
            href="#about"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li className="px-2 lg:px-5 group drop-shadow-2xl">
          <Link
            href="#events"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            Events
          </Link>
        </li>
        <li className="px-2 lg:px-5 group drop-shadow-2xl">
          <Link
            href="#resources"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            Resources
          </Link>
        </li>
        <li className="px-2 lg:px-5 group drop-shadow-2xl">
          <Link
            href="#participants"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            Results
          </Link>
        </li>
        <li className="px-2 lg:px-5 group drop-shadow-2xl">
          <Link
            href="#board"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            Board
          </Link>
        </li>
        <li className="px-2 lg:px-5 group drop-shadow-2xl">
          <Link
            href="#contact"
            className="group-hover:text-forest_green transition-all duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="small_menu md:hidden relative ">
        <div className="menu_btn">
          <IconButton
            className="text-sm"
            onClick={() => setMenu((prev) => !prev)}
          >
            <div className=" flex items-center p-[1.4px]">
              <span className=" text-xl pr-5 text-white drop-shadow-lg max-sm:text-black">
                {menu ? "Close" : "Menu"}
              </span>
              {menu ? (
                <Close className="text-white max-sm:text-black" />
              ) : (
                <Menu className="text-white max-sm:text-black" />
              )}
            </div>
          </IconButton>
        </div>
        <div className="menu_list absolute">
          <Fade in={menu}>
            <ul className="sections flex flex-col text-xl max-sm:text-black">
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#about"
                >
                  About
                </Link>
              </li>
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#events"
                >
                  Events
                </Link>
              </li>
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#resources"
                >
                  Resources
                </Link>
              </li>
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#participants"
                >
                  Results
                </Link>
              </li>
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#board"
                >
                  Board
                </Link>
              </li>
              <li className="px-5 group">
                <Link
                  onClick={() => setMenu((prev) => !prev)}
                  className="group-hover:text-forest_green transition-all duration-300"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
