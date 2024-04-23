import React from "react";
import Link from "next/link";

const Participants = () => {
  return (
    <section id="participants">
      <div className="head text-5xl font-semibold text-center text-forest_green">
        Results &amp; Participants
      </div>
      <div className="content pt-5 flex flex-col gap-5 text-center">
        <p>
          The East African Math Olympiad concludes each year with the
          announcement of winners and the recognition of outstanding
          participants from across the region. Results are typically announced
          within two days following the competition, highlighting the top
          performers from each participating country and the schools that have
          exceptionally supported their mathematical talents.
        </p>

        <div>
          <h2 className="font-semibold text-xl text-ucla_blue">
            Access Past Results
          </h2>
          Explore detailed results from previous editions of the East African
          Math Olympiad:
          <ul className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 pl-10 ">
            <li>
              <Link href="" className="underline text-forest_green/70">
                2023 Results
              </Link>
            </li>
            <li>
              <Link href="" className="underline text-forest_green/70">
                2022 Results
              </Link>
            </li>
            <li>
              <Link href="" className="underline text-forest_green/70">
                2021 Results
              </Link>
            </li>
            <li>
              <Link href="" className="underline text-forest_green/70">
                2020 Results
              </Link>
            </li>
          </ul>
          <p>
            Each link provides access to the respective year&apos;s full
            results, including individual scores, school rankings, and country
            performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Participants;
