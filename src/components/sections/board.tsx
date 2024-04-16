import React from "react";
import Image from "next/image";

const Board = () => {
  const countries = [
    {
      country: "Kenya",
      flag: "/images/flags/ke.svg",
      name: "Dr. James Katende",
    },
    {
      country: "Uganda",
      flag: "/images/flags/ug.svg",
      name: "Dr. Joseph Ssebuliba",
    },
    {
      country: "Zambia",
      flag: "/images/flags/zm.svg",
      name: "Dr. Isaac Tembo",
    },
    {
      country: "Tanzania",
      flag: "/images/flags/tz.svg",
      name: "Dr. Sylvester Rugeihyamu",
    },
    {
      country: "Rwanda",
      flag: "/images/flags/rw.svg",
      name: "Dr. Celestin Kurujyibwami (Chair)",
    },
    {
      country: "Burundi",
      flag: "/images/flags/bi.svg",
      name: "Dr. Francois Ndayiragije",
    },
    {
      country: "Ethiopia",
      flag: "/images/flags/et.svg",
      name: "Dr. Tilahun Abebaw",
    },
    {
      country: "Sudan",
      flag: "/images/flags/sd.svg",
      name: "Dr. Layla Sorkatti",
    },
    {
      country: "South Sudan",
      flag: "/images/flags/ss.svg",
      name: "Dr. Atem Bul",
    },
  ];

  const otherMembers = [
    {
      country: "Netherlands",
      flag: "/images/flags/nl.svg",
      name: "Dr. Diletta Martinelli",
      university: "University of Amsterdam",
    },
    {
      country: "Sweden",
      flag: "/images/flags/se.svg",
      name: "Dr. Paul Vaderlind",
      university: "University of Stockholm",
    },
  ];

  return (
    <section id="board">
      <div className="head text-5xl font-semibold text-center text-forest_green">Board</div>
      <div className="content pt-5 flex flex-col gap-5">
        <div className="countries flex flex-wrap justify-around gap-y-5">
          {countries.map((country, idx) => (
            <div key={idx} className="country max-w-[250px] text-center max-lg:p-4 lg:border-2 rounded-sm">
              <div className="image">
                <Image
                  src={country.flag}
                  alt="flag"
                  height={100}
                  width={100}
                  layout="responsive"
                  className="max-lg:hidden"
                />
              </div>
              <div className="position pt-3">{country.country}</div>
              <div className="name pt-3 font-semibold">{country.name}</div>
            </div>
          ))}
        </div>
        <div className="other_members pt-10">
          <div className="text-3xl font-semibold text-center text-ucla_blue">
            Adjoint Members
          </div>
          <div className="members flex flex-col gap-3 pt-10 items-center">
            {otherMembers.map((m, idx) => (
              <div className="member" key={idx}>
                <div className="name font-semibold">{m.name}</div>
                <div className="uni">{m.university}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;
