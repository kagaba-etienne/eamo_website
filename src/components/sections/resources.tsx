import React from "react";

const Resources = () => {
  const educationalRes = [
    {
      title: "Introductory Problem Solving Guides",
      description:
        "These guides cover fundamental techniques in algebra, geometry, number theory, and combinatorics. Designed for newcomers to mathematical olympiads, they provide a foundational understanding of essential mathematical concepts.",
    },
    {
      title: "Advanced Theoretical Workshops",
      description:
        "Recorded sessions and materials from workshops that focus on high-level theories and their practical applications. Ideal for students who are comfortable with basic concepts and are ready to explore complex problem-solving techniques.",
    },
    {
      title: "Strategy and Tactics in Mathematical Olympiads",
      description:
        "A detailed exploration of strategies for tackling olympiad problems, including how to manage time, select problems, and optimize solutions. Essential for students aiming to enhance their competitive performance.",
    },
    {
      title: "Online Problem Banks",
      description:
        "Interactive platforms offering a range of problems for practice, with instant feedback. These platforms adapt to each student's performance, providing challenges that are appropriately scaled in difficulty.",
    },
  ];

  return (
    <section id="resources">
      <div className="head text-5xl font-semibold text-center text-forest_green">
        Past Papers &amp; Resources
      </div>
      <div className="content pt-5 flex flex-col gap-5 text-center">
        <h2 className="font-semibold text-xl text-ucla_blue">Past papers</h2>
        <p>
          Past papers are a vital resource for students preparing for the
          Olympiad as they provide insights into the format and types of
          questions that can be expected. Utilizing these can help students
          practice effectively and gain confidence in solving Olympiad-level
          problems.
        </p>
        <ul className="list-decimal pl-10 flex flex-col gap-5 items-center max-w-3xl mx-auto">
          <li>
            <a href="" className="font-semibold text-ucla_blue/75">
              Olympiad Papers 2019-2023
            </a>
            <p>
              A compilation of past papers from the last five years. These
              documents include solutions and examiner&apos;s comments, which
              are instrumental in helping students understand the rigorous
              standards of the competition.
            </p>
          </li>
        </ul>
        <h2 className="font-semibold text-xl text-ucla_blue">
          Educational Resources
        </h2>
        <p>
          In addition to past papers, we offer a variety of resources tailored
          to enhance learning and preparation for the competition:
        </p>
        <ul className="list-decimal pl-10 flex flex-col gap-5 items-center max-w-3xl mx-auto">
          {educationalRes.map((edu, idx) => (
            <li key={idx}>
              <a href="" className="font-semibold text-ucla_blue/75">
                {edu.title}
              </a>
              <p>{edu.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resources;
