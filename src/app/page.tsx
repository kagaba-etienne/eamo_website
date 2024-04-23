"use client";
import { Close, Menu } from "@mui/icons-material";
import { Fade, IconButton } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      {/* <nav className="navbar bg-white text-black">
        <div className="max-w-5xl mx-auto py-5 flex justify-between items-center px-10">
        <div>EAMO 2024</div>
        <div className="links">
          <ul className="navbar-nav ms-auto flex gap-5">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#goals">
                Goals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#board">
                Board
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#participants">
                Participants
              </a>
            </li>
            <button className="btn btn-primary ms-lg-3">Resources</button>
          </ul>
        </div>
        </div>
      </nav> */}
      <nav className="">
        <div className="flex gap-10 justify-between items-center max-w-5xl mx-auto py-5 max-lg:p-10">
          <div className="logo text-4xl font-bold drop-shadow-2xl">
            <Link href="/">EAMO</Link>
          </div>
          <ul className="sections flex text-lg max-md:hidden">
            <li className="px-2 lg:px-5 group">
              <Link href="#about" className=" transition-all duration-300">
                About
              </Link>
            </li>
            <li className="px-2 lg:px-5 group drop-shadow-2xl">
              <Link href="#goals" className=" transition-all duration-300">
                Goals
              </Link>
            </li>
            <li className="px-2 lg:px-5 group drop-shadow-2xl">
              <Link href="#board" className=" transition-all duration-300">
                Board
              </Link>
            </li>
            <li className="px-2 lg:px-5 group drop-shadow-2xl">
              <Link href="#contact" className=" transition-all duration-300">
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
                  <span className=" text-xl pr-5 text-white drop-shadow-lg">
                    {menu ? "Close" : "Menu"}
                  </span>
                  {menu ? (
                    <Close className="text-white" />
                  ) : (
                    <Menu className="text-white" />
                  )}
                </div>
              </IconButton>
            </div>
            <div className="menu_list absolute">
              <Fade in={menu}>
                <ul className="sections flex flex-col text-xl">
                  <li className="px-5 group">
                    <Link
                      onClick={() => setMenu((prev) => !prev)}
                      className=" transition-all duration-300"
                      href="#about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="px-5 group">
                    <Link
                      onClick={() => setMenu((prev) => !prev)}
                      className=" transition-all duration-300"
                      href="#goals"
                    >
                      Goals
                    </Link>
                  </li>
                  <li className="px-5 group">
                    <Link
                      onClick={() => setMenu((prev) => !prev)}
                      className=" transition-all duration-300"
                      href="#board"
                    >
                      Board
                    </Link>
                  </li>
                  <li className="px-5 group">
                    <Link
                      onClick={() => setMenu((prev) => !prev)}
                      className=" transition-all duration-300"
                      href="#contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
        <hr />
      </nav>

      <div className="max-w-5xl mx-auto px-10 overflow-clip h-screen flex flex-col justify-center">
        <div className="sponsors mb-10">
          <div>
            {/* <div className="header text-center text-4xl font-bold py-4">
              Our Sponors
            </div> */}
            {/* <div className="flex justify-center items-center">
              <div className="max-lg:hidden">
                <Image
                  height={100}
                  width={100}
                  alt="media"
                  src="/images/uni_nairobi.jpg"
                  id="mainimg"
                  className=""
                />
              </div>
              <div className="">
                <Image
                  height={100}
                  width={295}
                  alt="media"
                  src="/images/global_talent_network.png"
                  id="mainimg"
                  className=""
                />
              </div>
              <div>
                <Image
                  height={100}
                  width={452}
                  alt="media"
                  src="/images/jane_street.webp"
                  className="imgs bg-white"
                />
              </div>
              <div className="w-[123px] overflow-clip max-lg:hidden">
                <div className="-mr-[350px] overflow-clip">
                  <Image
                    height={100}
                    width={450}
                    alt="media"
                    src="/images/Hence Technologies.svg"
                    className="imgs bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <div className="">
                <Image
                  height={100}
                  width={97}
                  alt="media"
                  src="/images/uni_nairobi.jpg"
                  id="mainimg"
                  className=""
                />
              </div>
              <div className="w-[123px] overflow-clip">
                <div className="-mr-[350px] overflow-clip">
                  <Image
                    height={100}
                    width={452}
                    alt="media"
                    src="/images/Hence Technologies.svg"
                    className="imgs bg-white"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <hr />
        <div className="text-center py-8 flex gap-10"><span className="text-[130px] font-bold">EAMO</span> <div>
          <p className="text-[130px] font-bold">2024</p>
          <p className="transform -translate-y-[50px] text-[32px] font-bold text-red-600">Nairobi - Kenya</p></div></div>
        <hr />
        <div className="py-5 text-center">
          <p className="text-5xl text-black">The second edition of the East-African Mathematical Olympiad.</p> <br />
          <p className="text-3xl pt-5">
          24th-26th April 2024
          </p>
        </div>
        <div className="text-center font-semibold text-5xl">
          Welcome to EAMO 2024
        </div>
        {/* <div className="button w-full flex justify-center mt-10">
          <Link href="#about" className=" border-2 text-lg p-3">
            About EAMO
          </Link>
        </div> */}
      </div>

      <div className="max-w-5xl mx-auto px-10" id="about">
        <h3 className="text-center text-xl font-semibold py-5">
          East African Mathematical Olympiad
        </h3>
        <hr />
        <p className=" py-5">
          The East African Mathematical Olympiad is an annual high school
          mathematics contest targeting the Eastern Africa countries. The East
          African mathematical community came to an understanding that a
          regional competition would be of crucial value in enhancing
          appreciation of mathematics as well as a great tool for preparing
          students for the international Mathematical Olympiad, and finally
          enabling young contestants to meet and share their passion for the
          subject.
        </p>
        <p className="">
          The goal is to inspire and encourage young mathematicians to pursue
          their passion, and to help them develop their critical thinking,
          problem-solving and teamwork skills. The Olympiad is designed to
          challenge students and push them to their limits, while also providing
          a fun and rewarding experience.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-10 mt-16" id="goals">
        <h3 className=" text-center text-xl font-semibold py-5">The Goals</h3>
        <hr />
        <ul className="  list-decimal flex flex-col gap-2 py-5">
          <li>Popularizing mathematics in society</li>
          <li>Identifying talented youth at an early stage</li>
          <li>
            Giving those gifted students a possibility to develop their talents
            and ambitions
          </li>
          <li>
            Getting more motivated students in our educational programmes,
            especially directed them towards STEM subjects
          </li>
          <li>
            Encouraging secondary school teachers to embrace new, modern
            approaches to mathematics
          </li>
        </ul>
      </div>
      <div className="max-w-5xl mx-auto px-10 mt-16" id="board">
        <h3 className=" text-center text-xl font-semibold py-5">The Board</h3>
        <hr />
        <dl className=" pt-5 grid grid-flow-row grid-cols-3 gap-y-5 py-5 max-md:grid-cols-2">
          <div className="row">
            <div className="col-sm">
              <dt className="font-semibold">Kenya</dt>
              <dd>Dr.James Katende (Chair)</dd>
            </div>
          </div>
          <div>
            <div className="col-sm">
              <dt className="font-semibold">Uganda</dt>
              <dd>Dr. Joseph Ssebuliba</dd>
            </div>
          </div>
          <div>
            <div className="col-sm">
              <dt className="font-semibold">Sudan</dt>
              <dd>Dr. Layla Sorkatti</dd>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <dt className="font-semibold">South Sudan</dt>
              <dd>Dr Atem Bul</dd>
            </div>
          </div>
          <div>
            <div className="col-sm">
              <dt className="font-semibold">Rwanda</dt>
              <dd>Dr. Celestin Kurujyibwami (Vice Chair)</dd>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <dt className="font-semibold">Ethiopia</dt>
              <dd>Dr. Tilahun Abebaw</dd>
            </div>
          </div>
          <div>
            <div className="col-sm">
              <dt className="font-semibold">Burundi</dt>
              <dd>Dr. Francois Ndayiragije</dd>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <dt className="font-semibold">Tanzania</dt>
              <dd>Dr. Sylvester Rugeihyamu</dd>
            </div>
          </div>
        </dl>
        <div>
          <h3 className="pt-10 text-lg font-semibold py-2">Adjoint Members</h3>
          <hr />
          <div className="row flex gap-5 pt-5">
            <div className="col-sm">
              <dt className="font-semibold">University of Amsterdam</dt>
              <dd>Dr. Diletta Martinelli</dd>
            </div>
            <div className="col-sm">
              <dt className="font-semibold">University of Stockholm</dt>
              <dd>Dr. Paul Vaderlind</dd>
            </div>
          </div>
        </div>
      </div>
      <footer className=" mt-16">
        <hr />
        <div className="max-w-5xl mx-auto py-5 flex justify-between items-center px-10 max-md:flex-col max-md:justify-center max-md:gap-2">
          <div className="logo">
            <Link href={"/"} className="text-2xl font-bold">
              EAMO 2024
            </Link>
          </div>
          <div className="credits">EAMO &copy; All rights reserved.</div>
          <div className="socials">
            <p>Got any questions? Talk to us via:</p>
            <ul className="flex gap-5 justify-center">
              <li>
                <Link href={"/"}>
                  <Email fontSize="large" />
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Phone fontSize="large" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
