import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { UilEnvelopeCheck, UilEnvelopeHeart } from "@iconscout/react-unicons";
import { serviceID, templateID, publicKey } from "../../../api/apiService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../components/HTML/Button";

const SignForm = () => {
  const form = useRef();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSend, setIsSend] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      userData.name.trim() !== "" &&
      userData.email.trim() !== "" &&
      userData.message.trim() !== ""
    ) {
      const templateParams = {
        form_name: userData.name,
        form_email: userData.email,
        message: userData.message,
        to_name: "Ivan Sarabeev",
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setUserData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Error sending", error);
        });

      setIsSend(true);
      toast.success(
        `Thank you for taking of your time, to submit the form. ${userData.email}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } else {
      setIsSend(false);
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center text-black/70"
      >
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=""
            required={true}
            value={userData.name}
            onChange={handleChange}
            className="input-text regular-16 peer autofill:bg-transparent focus:border-[#FF6464]"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-slate-900/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-105 peer-focus:font-medium peer-focus:text-[#FF6464]"
          >
            Your Name *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="email"
            name="email"
            value={userData.email}
            placeholder=""
            required={true}
            onChange={handleChange}
            className="input-text regular-16 peer autofill:bg-transparent focus:border-[#5185D4]"
          />
          <label
            htmlFor="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-slate-900/60 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-105 peer-focus:font-medium peer-focus:text-[#5185D4]"
          >
            Your Email *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="text"
            name="message"
            value={userData.message}
            placeholder=""
            required={true}
            onChange={handleChange}
            className="regular-16 input-text peer w-full autofill:bg-transparent focus:border-[#73f256]"
          />
          <label
            htmlFor="message"
            className="label-text peer-focus:text-[#73f256]"
          >
            Message *
          </label>
        </div>
        <Button type="submit" className="submit-btn">
          {isSend ? (
            <UilEnvelopeHeart height={24} width={20} />
          ) : (
            <UilEnvelopeCheck height={24} width={20} />
          )}
          Submit
        </Button>
        <ToastContainer limit={1} />
      </form>
    </>
  );
};

export default SignForm;
