import type { NextPage } from "next";

import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
    >
      <div>No idea what to put here. lemme know or something idk.</div>
    </motion.div>
  );
};

export default About;
