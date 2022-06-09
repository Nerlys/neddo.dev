import type { NextPage } from "next";

import { motion } from "framer-motion";

const Blog: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="mt-36 w-full"
    >
      <div>Coming soon... 👀</div>
    </motion.div>
  );
};

export default Blog;
