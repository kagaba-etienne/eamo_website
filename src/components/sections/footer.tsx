import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex gap-10 justify-between items-center max-w-5xl mx-auto py-10 max-lg:flex max-lg:flex-col max-lg:gap-5 p-10">
      <div className="logo text-4xl font-bold text-forest_green">
        <Link href="/">EAMO</Link>
      </div>
      <div className="mid">EAMO 2023. All rights reserved.</div>
      <div className="pages">
        Follow us on:
        <span className="">
          <ul className="inline">
            <li className="inline px-2">
              <Link href="#">IG</Link>
            </li>
            <li className="inline px-2">
              <Link href="#">FB</Link>
            </li>
            <li className="inline px-2">
              <Link href="#">X</Link>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
