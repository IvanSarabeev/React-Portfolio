//@ts-check
import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-[60] h-screen w-screen bg-sky-400"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-slate-600"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-[#00123a]"
      />
    </>
  );
};

export default TransitionEffect;
