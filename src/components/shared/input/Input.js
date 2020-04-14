import React from "react";

export default function Input({
  label,
  required,
  className,
  type,
  name,
  onChange,
  onBlur,
  placeholder,
  value,
  touched,
  error,
  autocomplete,
}) {
  return (
    <div className="input__wrapper">
      <label className="input__label">
        {label}
        {required && <span className="text--red">*</span>}
      </label>
      <input
        className={`input ${className} ${
          touched && error ? "input--error" : ""
        } `}
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        autoComplete={autocomplete}
      />
      {touched && error && <p className="input__error">{error}</p>}
    </div>
  );
}