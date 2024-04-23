import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <section id="events">
      <div className="head text-5xl font-semibold text-center text-forest_green">
        Events
      </div>
      <div className="content pt-5 flex flex-col gap-5 text-center">
        <div className="events flex flex-col gap-5 items-center max-w-4xl mx-auto">
          <div className="event_card rounded-sm">
            <div className="caption text-center p-3">
              <div className="text-lg py-2 font-semibold text-ucla_blue">
                Country Specific Olympiads
              </div>
              <div className="date py-2 text-ucla_blue/80">
                Date: Depends on the country
              </div>
              <div className="pt-2">
                Before advancing to the regional competition, students undergo a
                rigorous selection process within their own countries. This
                stage is designed to identify the top mathematical talents from
                each country, ensuring that only the most skilled and prepared
                competitors represent their nation in the East African Math
                Olympiad.
              </div>
            </div>
          </div>
          <div className="event_card rounded-sm">
            <div className="caption text-center p-3">
              <div className="text-lg py-2 font-semibold text-ucla_blue">
                Online Training With Coaches
              </div>
              <div className="date py-2 text-ucla_blue/80">
                Date: March 15th
              </div>
              <div className="pt-2">
                Selected students participate in intense online training
                sessions led by experienced coaches. These sessions are aimed at
                sharpening the students&apos; mathematical abilities, covering
                advanced topics and problem-solving techniques that are crucial
                for the competition. The training also allows students to adapt
                to the competitive environment and collaborate with peers
                regionally.
              </div>
            </div>
          </div>
          <div className="event_card rounded-sm">
            <div className="caption text-center p-3">
              <div className="text-lg py-2 font-semibold text-ucla_blue">
                Competition Week
              </div>
              <div className="date py-2 text-ucla_blue/80">
                Date: April 20th
              </div>
              <div className="pt-2">
                During this pivotal week, students take part in the actual
                Olympiad examinations. The exams are spread over several days,
                each posing unique challenges to test the breadth and depth of
                the students&apos; mathematical knowledge. Winners are announced
                at the end of the week, with ceremonies to award the top
                performers for their excellence and hard work. This not only
                celebrates their achievements but also inspires a spirit of
                mathematical pursuit among all participants.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
