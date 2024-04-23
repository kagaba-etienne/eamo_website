import React from "react";
import Image from "next/image";
import { South } from "@mui/icons-material";

const Hero = () => {
  return (
    <section className="relative max-sm:h-screen text-white">
      <Image
        src={"/images/students_board.webp"}
        alt="students"
        layout="responsive"
        width={100}
        height={100}
        className="max-sm:hidden"
      />
      <div className="w-full z-10 absolute bottom-[120px] max-lg:bottom-[80px] max-sm:h-full max-sm:flex max-sm:flex-col max-sm:justify-center">
        <div className="max-w-7xl mx-auto">
          <div className=" max-md:text-3xl max-lg:text-5xl text-6xl font-bold text-center px-3 max-sm:mt-[150px] drop-shadow-2xl max-sm:text-forest_green">
            The East-African Mathematical Olympiad
          </div>
          <div className="down_icon text-center pt-24 max-md:pt-10 max-lg:pt-16 max-sm:text-forest_green">
            <South
              fontSize="large"
              className="text-[100px] max-md:text-[50px] max-lg:text-[70px] animate-bounce"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-white from-5% to-transparent absolute w-full h-24 z-10 bottom-0">
        {" "}
      </div>
    </section>
  );
};

export default Hero;
