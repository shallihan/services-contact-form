import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form>
        <p>Hey, my name is </p>
        <input type="text" />
        <p> and I'd like to make an appointment with</p>
        <select>
          <option value="David">David</option>
          <option value="Johanna">Johanna</option>
          <option value="Stephen">Stephen</option>
        </select>
        <p>You can contact me at </p>
        <input type="email" />
        <div className="terms-conditions">
          <input type="radio" value="accept" />
          <p>I hereby accept all terms and conditions</p>
        </div>
        <button type="submit">
          Send Enquiry
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
