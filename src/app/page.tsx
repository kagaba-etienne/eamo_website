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
        <div className="flex gap-10 justify-between items-center max-w-5xl mx-auto md:py-8 sm:py-5 py-3 max-lg:px-10">
          <div className="logo md:text-4xl text-2xl font-bold drop-shadow-2xl">
            <Link href="/" className="flex gap-3">
              <span className=" font-bold">
                <span className="text-black">E</span>
                <span className="">A</span>
                <span className=" text-red-600">M</span>
                <span className=" text-forest_green">O</span>
              </span>{" "}
              <div className="flex flex-col items-end">
                <p className=" font-bold">2024</p>
              </div>
            </Link>
          </div>
          <ul className="sections flex text-lg max-md:hidden">
            <li className="px-2 lg:px-5 group">
              <Link
                href="#about"
                className=" group-hover:text-forest_green transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li className="px-2 lg:px-5 group">
              <Link
                href="#timeline"
                className="group-hover:text-forest_green transition-all duration-300"
              >
                Timeline
              </Link>
            </li>
            <li className="px-2 lg:px-5 group drop-shadow-2xl">
              <Link
                href="#goals"
                className="group-hover:text-forest_green transition-all duration-300"
              >
                Goals
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
                href="#sponsors"
                className="group-hover:text-forest_green transition-all duration-300"
              >
                Sponsors
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
                <ul className="sections flex flex-col text-xl gap-2 border-2">
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
                      href="#timeline"
                    >
                      Timeline
                    </Link>
                  </li>
                  <li className="px-5 group">
                    <Link
                      onClick={() => setMenu((prev) => !prev)}
                      className="group-hover:text-forest_green transition-all duration-300"
                      href="#goals"
                    >
                      Goals
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
                      href="#sponsors"
                    >
                      Sponsors
                    </Link>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </div>
        <hr />
      </nav>

      <div className="bg-[url('/images/nairobi.webp')] bg-fixed bg-cover bg-center">
        <div className="bg-white/1">
          <div className="max-w-5xl mx-auto px-10 overflow-clip h-screen flex flex-col justify-center ">
            <div className="sponsors mb-10">
              <div>
                {/* <div className="header text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold py-4">
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
            <div className="text-center py-8 flex gap-10 justify-center">
              <span className="text-[56px] sm:text-[72px] md:text-[94px] lg:text-[130px] font-bold">
                <span className="text-black">E</span>
                <span className="">A</span>
                <span className=" text-red-600">M</span>
                <span className=" text-forest_green">O</span>
              </span>{" "}
              <div className="flex flex-col items-end">
                <p className="text-[56px] sm:text-[72px] md:text-[94px] lg:text-[130px] font-bold">
                  2024
                </p>
                <p className="transform lg:-translate-y-[50px] md:-translate-y-[30px] sm:-translate-y-[25px] -translate-y-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-bold text-red-600">
                  Nairobi - Kenya
                </p>
              </div>
            </div>
            <hr />
            <div className="py-5 text-center">
              <p className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                The second edition of the East-African Mathematical Olympiad.
              </p>{" "}
              <br />
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg lg:pt-5 md:pt-3 sm:pt-2 text-red-600">
                24th-26th April 2024
              </p>
            </div>
            {/* <div className="text-center font-semibold text-5xl">
          Welcome to EAMO 2024
        </div> */}
            {/* <div className="button w-full flex justify-center mt-10">
          <Link href="#about" className=" border-2 text-lg p-3">
            About EAMO
          </Link>
        </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-10 mt-16" id="welcome">
        <h3 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-5 text-red-600">
          Welcome To EAMO
        </h3>
        <hr />
        <p className=" py-5">
          The EAMO is a prestigious competition for students across East Africa,
          aiming to promote and celebrate mathematical excellence. In its second
          edition, EAMO 2024 will be held from April 24th to April 26th, 2024.
          This year, Kenya has the honor of hosting the event, where
          coordination and marking will take place.
        </p>
        <p className="py-5">
          All competitions will be conducted online, allowing participants from
          across East Africa to showcase their mathematical prowess in a
          convenient and accessible manner.
        </p>
        <p className="">
          Each junior team will comprise four students, while senior teams will
          consist of seven students. Participants will tackle challenging
          mathematical problems designed to test their problem-solving skills
          and mathematical creativity.
        </p>
        <p className="py-5">
          As we celebrate mathematical excellence in East Africa, we invite
          students, educators, and enthusiasts to join us in this exciting
          event. Let&apos;s come together to inspire and nurture the next
          generation of mathematical talent in our region.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-10" id="about">
        <h3 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-5 mt-16 text-red-600">
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
        <p className="py-5">
          Last year marked the successful inaugural edition, hosted by Rwanda,
          with seven participating countries. This year, Kenya is proud to host
          the second edition, with participation from eight countries, further
          cementing the Olympiad&apos;s regional significance and impact.
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-10" id="timeline">
        <h3 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-5 mt-16 text-red-600">
          Timeline
        </h3>
        <hr />
        <p className=" py-5">Here are some crucial dates in EAMO2024:</p>
        <ul className="list-disc flex flex-col gap-2">
          <li>
            <div>
              <strong>April 5th - 7th, 2024</strong>
            </div>
            <div>Online training of all contestants.</div>
          </li>
          <li>
            <div>
              <strong>April 24th, 2024</strong>
            </div>
            <div>Opening ceremony and exam day.</div>
          </li>
          <li>
            <div>
              <strong>April 25th, 2024</strong>
            </div>
            <div>Marking and coordination.</div>
          </li>
          <li>
            <div>
              <strong>April 26th, 2024</strong>
            </div>
            <div>Results publishing and closing ceremony.</div>
          </li>
        </ul>
      </div>
      <div className="max-w-5xl mx-auto px-10 mt-16" id="goals">
        <h3 className=" text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-5 text-red-600">
          The Goals
        </h3>
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
        <h3 className=" text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold py-5 text-red-600">
          The Board
        </h3>
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
          <h3 className="pt-10 text-xl font-semibold py-2">Adjoint Members</h3>
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
      <div className="max-w-5xl mx-auto px-10 mt-16" id="sponsors">
        <div className="header text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold py-4 text-red-600">
          Our Sponors
        </div>
        <hr />
        <div className="flex justify-center items-center py-5 gap-2">
          <div className=" flex">
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
          <div className="">
            <Image
              height={100}
              width={450}
              alt="media"
              src="/images/Hence Technologies.svg"
              className="imgs "
            />
          </div>
        </div>
      </div>
      <footer className=" mt-16">
        <hr />
        <div className="max-w-5xl mx-auto py-5 flex justify-between items-center px-10 max-md:flex-col max-md:justify-center max-md:gap-2">
          <div className="logo md:text-4xl text-2xl font-bold drop-shadow-2xl">
            <Link href="/" className="flex gap-3">
              <span className=" font-bold">
                <span className="text-black">E</span>
                <span className="">A</span>
                <span className=" text-red-600">M</span>
                <span className=" text-forest_green">O</span>
              </span>{" "}
              <div className="flex flex-col items-end">
                <p className=" font-bold">2024</p>
              </div>
            </Link>
          </div>
          <div className="credits">EAMO &copy; All rights reserved.</div>
          {/* <div className="socials">
            <p>Got any questions? Talk to us via:</p>
            <ul className="flex gap-5 justify-center">
              <li>
                <Link href={"mailto:"}>
                  <Email fontSize="large" />
                </Link>
              </li>
              <li>
                <Link href={"telto:"}>
                  <Phone fontSize="large" />
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </footer>
    </>
  );
}
