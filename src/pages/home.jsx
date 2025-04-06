import React from "react";
import Popular from "../components/popular";
import Veggie from "../components/veggie";
import { motion } from "framer-motion";
import Toggle from "../components/toggle";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      {/* <Toggle /> */}
      <Veggie />
      <Popular />
    </motion.div>
  );
};

export default Home;
