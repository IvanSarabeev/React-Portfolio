import React from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacs";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { inject } from "@vercel/analytics";
import ErrorPage from "./pages/Error";

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
