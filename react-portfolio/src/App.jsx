import React from "react";
import HomePage from "./pages/Home/HomePage";
import ResumePage from "./pages/Resume/ResumePage";
import ProjectPage from "./pages/Project/ProjectPage";
import ContactPage from "./pages/Contact/ContactPage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

inject();

export default App;
