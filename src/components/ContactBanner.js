import React from "react";
import hiba from "../images/hiba.jpeg";
import { motion } from 'framer-motion';
import { Fade } from "../animations";


const ContactBanner = () => {
    return (
        <motion.div className="person" variants={Fade} initial="hidden" animate="show">
          <motion.div className="team-member-profile">
            <img className="team-member-hiba" src={hiba} alt="Hiba, Sales & Marketing" />
            <div className="team-member-description">
              <h3>Hiba</h3>
              <h4>Sales & Marketing</h4>
            </div>
          </motion.div>
          <motion.div className="contact-details">
            <h4>hello@studio.com</h4>
            <h4>(123) 895 869</h4>
          </motion.div>
          <motion.div className="address-details">
            <h4>4/5 Aungier Street</h4>
            <h4>Dublin 4</h4>
          </motion.div>
          <motion.div className="hiring">
            <h4>Want to join our team?</h4>
            <h4 className="hiring-contact">hiring@studio.com</h4>
          </motion.div>
        </motion.div>
    );
};

export default ContactBanner;