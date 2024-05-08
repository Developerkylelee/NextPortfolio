import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText2 from "../utils/AnimatedText2";
import localFont from "next/font/local";

const myFont = localFont({ src: "../assets/KeyVirtue.ttf" });

const Aboutcontainer = () => {

    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
      { type: "paragraph", text: "    As a MERN Full Stack Web Developer, my primary focus is on creating secure and responsive websites and web applications for clients. With expertise in utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), I am able to handle both front-end and back-end development. By leveraging my skills in HTML, CSS, JavaScript, and various libraries/frameworks, I ensure that the websites and web applications I create are not only visually appealing but also highly functional."},
    ];
  
    const container = {
      visible: {
        transition: {
          staggerChildren: 0.025
        }
      }
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
        <div className="page-container">
          <div class="container">
          <div className={`${myFont.className}`}>
    <motion.div
    
      className="App" 
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
      transition={{ delay: 0.2, duration: 0.2, ease: 'easeInOut'}}
      
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText2 {...item} key={index}  style={{wordBreak:"break-all"}} />;
        })}
      </div>
      {/* <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button> */}
    </motion.div>
    </div>
          </div>
        </div>
      
    </>
  )
};

export default Aboutcontainer
