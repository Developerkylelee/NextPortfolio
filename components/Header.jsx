import Link from "next/link";
import react from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

const myFont = localFont({ src: "../assets/KeyVirtue.ttf" });

const Header = () => (
  <header className={`${myFont.className}`}>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/"><p>Home</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/about"><p>About</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/skills"><p>Skills</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/projects"><p>Projects</p></Link>
    </motion.div>
    <motion.div className="logo" whileTap={{ scale: 1.35 }}>
      <Link href="/contact"><p>Contact</p></Link>
    </motion.div>
  </header>
);

export default Header;
