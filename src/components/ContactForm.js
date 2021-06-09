import React, { useState } from "react";
import ContactBanner from "./ContactBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { Fade } from "../animations";

const ContactForm = () => {
  const [inputText, setInputText] = useState("Your name here");
  const [inputEmail, setInputEmail] = useState("Your email here");

  const handleNameInput = (e) => {
    setInputText(e.target.value);
  };

  const handleEmailInput = (e) => {
    setInputEmail(e.target.value);
  };

  const handleNameClick = (e) => {
    setInputText("");
  };

  const handleEmailClick = (e) => {
    setInputEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("Your name here");
    setInputEmail("Your email here");
  };

  return (
    <>
      <div class="container">
        <motion.form onSubmit={handleSubmit} variants={Fade} initial="hidden" animate="show">
          <h2>Schedule an Appointment</h2>
          <div className="form-input">
          <div className="form-section">
            <p>Hey, my name is </p>
            <div className="input-section">
              <input
                onChange={handleNameInput}
                onClick={handleNameClick}
                type="text"
                value={inputText}
                required
              />
              <div className="line"></div>
            </div>
            </div>
            <div className="form-section">
            <p> and I'd like to make an appointment with</p>
            <div className="input-section">
              <select>
                <option value="" selected disabled hidden>
                  Choose a consultant
                </option>
                <option value="David">David</option>
                <option value="Johanna">Johanna</option>
                <option value="Stephen">Stephen</option>
              </select>
              <div className="line"></div>
            </div><p>.</p>
            </div>
            <div className="form-section">
            <p>Please contact me at </p>
            <div className="input-section">
              <input
                onChange={handleEmailInput}
                onClick={handleEmailClick}
                type="email"
                value={inputEmail}
                required
              />
              <div className="line"></div>
            </div>
            <p>.</p>
          </div>
          </div>
          <div className="terms-conditions">
            <input type="checkbox" id="agreement" name="agreement" required />
            <label for="agreement" className="agreement-statement">
              I here by accept all terms and conditions
            </label>
            <span className="checkbox">
              <FontAwesomeIcon icon={faCheck} className="check" />
            </span>
          </div>
          <button className="submit-enquiry" type="submit">
            Send Enquiry
            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
          </button>
        </motion.form>
        <ContactBanner/>
      </div>
    </>
  );
};

export default ContactForm;
