import React, { useEffect } from "react";
import IconHearth from "../../../assets/icons/Hearth";
import IconInfoCircle from "../../../assets/icons/InfoCircle";
import SocialMedia from "../SocialMedia/SocialMedia";

const Alert = ({ isAlertVisible, isClosed }) => {
  useEffect(() => {
    if (isAlertVisible) {
      const timer = setTimeout(() => {
        isClosed();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAlertVisible, isClosed]);

  return (
    <>
      {isAlertVisible && (
        <dialog className="fixed inset-y-[50%] mx-auto flex items-center justify-center rounded-2xl">
          <div className="relative h-fit w-fit rounded-2xl bg-gradient-to-tr from-[#2b6bf5] via-white to-[#1f88f8] px-8 py-4">
            <span className="flex items-center gap-x-4">
              <IconInfoCircle />
              <h5 className="font-pageheading text-base leading-8 md:text-lg lg:text-xl">
                Thank you for taking of your time, to submit the form.
              </h5>
            </span>
            <div className="indent-1">
              <p className=" font-paragraph text-xs leading-6 md:text-sm lg:text-base">
                Your information has been received, and I appreciate your
                interest.
              </p>
              <p className=" font-pageheading text-xs leading-6 md:text-sm lg:text-base">
                If you have any urgent questions or concerns, don't hesitate to
                contact me:
              </p>
            </div>
            <SocialMedia />
            <span className="flex items-center gap-x-2 py-2">
              <h6 className="text-sm md:text-base">Once again, Thank you.</h6>
              <IconHearth />
            </span>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Alert;
