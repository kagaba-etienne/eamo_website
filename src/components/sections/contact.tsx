import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="head text-5xl font-semibold text-center text-forest_green">Contact Us</div>
      <div className="content pt-5 flex flex-col gap-5 text-center">
        <p>
        If you have any questions or need further information about the East African Math Olympiad, our team is ready to assist you. We are committed to providing support and detailed responses to your inquiries. Whether you need assistance with registration, have questions about the events, or require resources for preparation, please feel free to reach out to us.
        </p>

        <div className="card max-w-xl mx-auto">
          <ul className="flex flex-col gap-5">
            <li>
              <span className="font-semibold text-ucla_blue">Email: </span>
              <a href="mailto:" className="underline text-forest_green/80">info@eamo@gmail.com</a>
              <p>For registration queries, resource requests, and any other information.</p>
            </li>
            <li>
              <span className="font-semibold text-ucla_blue">Phone: </span>
              <a href="tel:" className="underline text-forest_green/80">+254794423430</a>
              <p>Available from 9:00 AM to 5:00 PM EAT, Monday through Friday. Please note that this number is for urgent inquiries related to the competition events only.</p>
            </li>
          </ul>
        </div>

        <p>We aim to respond to all emails within 24 hours. For immediate assistance during working hours, the telephone is the most effective means of contact.</p>

        <p>We look forward to your participation and are here to ensure that your experience with the East African Math Olympiad is both rewarding and enriching.</p>
      </div>
    </section>
  );
};

export default Contact;
