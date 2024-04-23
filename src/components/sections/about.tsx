import React from "react";

const About = () => {
  return (
    <section id="about" className="text-center">
      <div className="head text-5xl font-semibold text-forest_green">
        About EAMO
      </div>
      <div className="content pt-5 flex flex-col gap-5">
        <p>
          The East African Mathematical Olympiad is an annual high school
          mathematics contest targeting the Eastern Africa countries. The East
          African mathematical community came to an understanding that a
          regional competition would be of crucial value in enhancing
          appreciation of mathematics as well as a great tool for preparing
          students for the international Mathematical Olympiad, and finally
          enabling young contestants to meet and share their passion for the
          subject.
        </p>

        <p>
          The goal is to inspire and encourage young mathematicians to pursue
          their passion, and to help them develop their critical thinking,
          problem-solving and teamwork skills. The Olympiad is designed to
          challenge students and push them to their limits, while also providing
          a fun and rewarding experience.
        </p>
      </div>
    </section>
  );
};

export default About;
