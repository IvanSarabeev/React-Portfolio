import React, { useState } from "react";
import { UilEnvelopeAdd } from "@iconscout/react-unicons";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  }

  return (
    <>
      <form
        name="contact"
        action="/contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="group relative z-0 mb-8 mt-[40px] w-full">
          <input
            id="name"
            type="text"
            name="name"
            placeholder=""
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm text-black autofill:bg-transparent focus:border-[#FF6464] focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#FF6464]"
          >
            Name *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-[40px] w-full">
          <input
            id="name"
            type="email"
            name="name"
            value={email}
            placeholder=""
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-[18px] autofill:text-red-900 focus:border-[#5185D4] focus:outline-none focus:ring-0 "
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#5185D4]"
          >
            Email *
          </label>
        </div>
        <div className="group relative z-0 mb-8 mt-[40px] w-full">
          <input
            id="name"
            type="text"
            name="name"
            value={content}
            placeholder=""
            required={true}
            onChange={(e) => setContent(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-[2px] border-[#B5B5B5] bg-transparent px-0 py-2.5 text-sm text-black focus:border-[#CA56F2] focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-[18px] text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#CA56F2]"
          >
            Message *
          </label>
        </div>
        <button
          type="submit"
          className="mb-2 mr-2 mt-6 inline-flex items-center gap-x-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-[16px] font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-cyan-300 aria-checked:bg-sky-600"
        >
          <UilEnvelopeAdd />
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
