import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { UilEnvelopeCheck, UilEnvelopeHeart } from "@iconscout/react-unicons";
import { serviceID, templateID, publicKey } from "../../api/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      const templateParams = {
        form_name: name,
        form_email: email,
        message: message,
        to_name: "Ivan Sarabeev",
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending", error);
        });

      setIsSend(true);
      toast.success(
        `Thank you for taking of your time, to submit the form. ${email}`,
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
        className="flex flex-col items-start justify-center"
      >
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=""
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-2 border-[#B5B5B5] bg-transparent px-0 py-2.5 font-text text-sm text-black autofill:bg-transparent focus:border-[#FF6464] focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-pageheading text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-105 peer-focus:font-medium peer-focus:text-[#FF6464]"
          >
            Your Name *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="email"
            name="name"
            value={email}
            placeholder=""
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-2 border-[#B5B5B5] bg-transparent px-0 py-2.5 font-text text-lg autofill:text-red-900 focus:border-[#5185D4] focus:outline-none focus:ring-0 "
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-pageheading text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-105 peer-focus:font-medium peer-focus:text-[#5185D4]"
          >
            Your Email *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-10 w-full">
          <input
            id="name"
            type="text"
            name="name"
            value={message}
            placeholder=""
            required={true}
            onChange={(e) => setMessage(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-2 border-[#B5B5B5] bg-transparent px-0 py-2.5 font-text text-sm text-black focus:border-[#73f256] focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-pageheading text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-105 peer-focus:font-medium peer-focus:text-[#73f256]"
          >
            Message *
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="mb-2 mr-2 mt-6 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-cyan-300 aria-checked:bg-sky-600"
          >
            {isSend ? (
              <UilEnvelopeHeart className="h-5 w-5" />
            ) : (
              <UilEnvelopeCheck className="h-5 w-5" />
            )}
            Submit
          </button>
          <ToastContainer limit={1} />
        </div>
      </form>
    </>
  );
};

export default Form;
