import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import localFont from "next/font/local";

const myFont = localFont({ src: "../assets/skeleboom.ttf" });


export default function Homecontainer() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Welcome to my Portfolio" },
    { type: "heading1", text: "My name is Kyle Lee" },
    {
      type: "heading1",
      text: "&"
    },
    {
      type: "heading1",
      text: "I am a Fullstack Developer!"
    },
  
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
    <div className={`${myFont.className}`}>
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container ">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      {/* <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button> */}
    </motion.div>
    </div>
    </>
  );
}


// bg-[#2e2257]
// <motion.div
//        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#2e2257]'
//        variants={transitionVariants} 
//        initial='initial'
//        animate='animate'
//        exit='exit'
//        transition={{ delay: 0.2, duration: 0.2, ease: 'easeInOut'}}
//       ></motion.div>