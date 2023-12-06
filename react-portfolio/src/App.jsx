import React from "react";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Project/Projects";
import Contacts from "./pages/Contact/Contacs";
import ErrorPage from "./pages/Error/ErrorPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { inject } from "@vercel/analytics";

// Need to remove Flowbite, Flowbite+React, ReactToastify from dependancyes

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          initial: { opacity: 1 },
          pageAnimate: { opacity: 1 },
          pageExit: { opacity: 1 },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

inject();

export default App;
