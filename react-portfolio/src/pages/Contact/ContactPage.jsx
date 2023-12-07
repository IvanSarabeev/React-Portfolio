import React from "react";
import Blobz from "../../assets/images/blob-haikei.png";
import Layout from "../../components/Layout/Layout";
import MenuNavigation from "../../components/Navigation/MenuNavigation";
import SignForm from "./components/SignForm";
import Footer from "../../components/Footer/Footer";
import TransitionEffect from "../../utils/TransitionEffect";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <>
      <TransitionEffect />
      <Layout>
        <section className="lg:max-container mt-6 flex h-full flex-col items-start justify-start lg:mt-56 2xl:justify-center">
          <MenuNavigation />
          <div className="container relative z-10">
            <img
              src={Blobz}
              alt="blob"
              loading="lazy"
              decoding="async"
              className="absolute right-[0%] top-[20%] -z-10 w-56 motion-safe:animate-spin-slow lg:right-[5%] lg:top-[5%] lg:w-[450px]"
            />
            <section className="container-padding">
              <motion.h2
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ delay: 1, type: "spring", bounce: 0.4 }}
                className="sub-heading"
              >
                Contact
              </motion.h2>
              <aside className="px-2.5 pb-2 sm:px-5 md:px-10 lg:mt-10 lg:px-14 lg:pb-6">
                <SignForm />
              </aside>
            </section>
            <Footer />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default ContactPage;
