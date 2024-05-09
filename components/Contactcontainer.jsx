import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import localFont from "next/font/local";

const myFont = localFont({ src: "../assets/KeyVirtue.ttf" });

const Contactcontainer = () => {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "LIKE WHAT YOU SEE? PLEASE REACH OUT!!!" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <>
      <div id="contact-container">
        <div id="contact-container-header">
          <div className={`${myFont.className}`}>
            <motion.div
              className="glitch layers"
              initial="hidden"
              // animate="visible"
              animate={replay ? "visible" : "hidden"}
              variants={container}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            >
              <div
                className="glitch layers" data-text="01"
                style={{ marginTop: "-200px", fontSize: "40px" }}
              >
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </div>
              {/* <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button> */}
            </motion.div>
          </div>
        </div>
        <div id="contact-container-body">
          <div className={`${myFont.className}`}>
        <motion.div className="contact-container-body-sections"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 40,
          delay: 1
        }}>
          <h3>NAME</h3>
        </motion.div>

        <motion.input
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 2, ease: [1, 1, 1, 1] }}
      whileFocus={{boxShadow:"0px 0px 20px white, 0px 0px 25px red"}}className="contact-inputs"
></motion.input>

        <motion.div className="contact-container-body-sections"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 40,
          delay: 1.2
        }}>
          <h3>EMAIL</h3>
        </motion.div>

        <div className="contact-container-body-sections">

<motion.input
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 3, ease: [1, 1, 1, 1] }}
whileFocus={{boxShadow:"0px 0px 20px white, 0px 0px 25px red"}}
className="contact-inputs"
></motion.input>

        </div>

        <motion.div className="contact-container-body-sections"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 40,
          delay: 1.4
        }}>
          <h3>MESSAGE</h3>
        </motion.div>

        <motion.textarea
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 4, ease: [1, 1, 1, 1] }}
whileFocus={{boxShadow:"0px 0px 30px red, 0px 0px 35px white"}}
className="contact-input-message"
></motion.textarea>

        <div className="contact-container-body-sections"></div>
        <div className="contact-container-body-sections">123456789</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
