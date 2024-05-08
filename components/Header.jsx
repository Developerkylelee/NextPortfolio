import Link from "next/link";
import react from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const myFont = localFont({ src: "../assets/KeyVirtue.ttf" });

const Header = () => (
  <header className={`${myFont.className}`}>
    <motion.div className="logo glitch layers" whileTap={{ scale: 1.35 }}>
      <Link href="/"><p className="glitch layers" data-text="0100110011010010010001101" >Home</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/about"><p className="glitch layers" data-text="1011001">About</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/skills"><p className="glitch layers" data-text="1100101011010">Skills</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/projects"><p className="glitch layers" data-text="0010111" >Projects</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/contact"><p className="glitch layers" data-text="001100100010">Contact</p></Link>
    </motion.div>
  </header>
);

export default Header;
