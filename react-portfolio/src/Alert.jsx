import React from "react";

const Alert = () => {
  return (
    <>
      <div
        className="mb-4 rounded-lg bg-green-50 p-4 text-sm text-green-800"
        role="alert"
      >
        <span className="font-medium">Success alert!</span>
        You have successfuly sended message.
      </div>
    </>
  );
};

export default Alert;
