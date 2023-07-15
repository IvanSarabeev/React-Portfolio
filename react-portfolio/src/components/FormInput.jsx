import React from "react";

const FormInput = (props) => {
  const { label, onChange, ...inputProps } = props;

  return (
    <div>
      <input name={props.name} placeholder={props.placeholder} />
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
