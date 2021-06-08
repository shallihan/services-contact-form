import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import hiba from "../images/hiba.jpeg";
import { motion } from "framer-motion";

const Contact = () => {
  const [inputText, setInputText] = useState("Your name here");
  const [inputEmail, setInputEmail] = useState("Your email here");
  const [inputConsultant, setConsultant] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleEmailInput = (e) => {
      setInputEmail(e.target.value);
  };

  const handleClick = (e) => {
      setInputText("");
  }

  const handleEmailClick = (e) => {
    setInputEmail("");
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("Your name here");
    setInputEmail("Your email here");
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <h2>Schedule an Appointment</h2>
        <div className="form-input">
          <p>Hey, my name is </p>
          <div className="type">
            <input onChange={handleInput} onClick={handleClick} type="text" value={inputText} required/>
            <motion.div className="line"></motion.div>
          </div>
          <p> and I'd like to make an appointment with</p>
          <div className="type">
            <select>
              <option value="" selected disabled hidden>Choose a consultant</option>
              <option value="David">David</option>
              <option value="Johanna">Johanna</option>
              <option value="Stephen">Stephen</option>
            </select>
            <motion.div className="line"></motion.div>
          </div>
          <p>Please contact me at </p>
          <div className="type">
            <input onChange={handleEmailInput} onClick={handleEmailClick} type="email" value={inputEmail} required/>
            <motion.div className="line"></motion.div>
          </div>
        </div>
        <div className="terms-conditions">
        <input type="checkbox" id="agree" name="agree" required/>
        <label for="agree" className="terms">I here by accept all terms and conditions</label>
        <span className="checkbox"><FontAwesomeIcon icon={faCheck} className="check"/></span>
        </div>
        <button type="submit">
          Send Enquiry
          <FontAwesomeIcon icon={faArrowRight} className="arrow" />
        </button>
      </form>
      <div className="contact">
        <div className="person">
          <div className="profile">
            <img className="hiba" src={hiba} alt="Hiba, Sales & Marketing" />
            <div className="details">
              <h3>Hiba</h3>
              <h4>Sales & Marketing</h4>
            </div>
          </div>
          <div className="contact-details">
            <h4>hello@studio.com</h4>
            <h4>(123) 895 869</h4>
          </div>
          <div className="address-details">
            <h4>4/5 Aungier Street</h4>
            <h4>Dublin 4</h4>
          </div>
          <div className="social">
            <h4>Looking for creatives?</h4>
            <h4 className="creatives">team@studio.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
