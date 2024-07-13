import React from "react";
import { useController } from "react-hook-form";

const TextInput = (props) => {
  const {
    label,
    name,
    text,
    type,
    error = "",
    control,
    className = "",
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="flex flex-col w-full mb-4">
      <label
        htmlFor={name}
        className="mb-2 font-medium text-md text-text2 dark:text-text3"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={error.length > 0 ? "" : text}
          {...props}
          {...field}
          className={` w-full px-6 py-4 text-sm font-medium border outline-none text-text2 rounded-xl bg-transparent dark:border-darkStroke dark:text-white ${className} ${
            error.length > 0 ? "border-error" : "border-stroke"
          }`}
        />
        {error.length > 0 && (
          <span className="absolute text-sm font-medium transition-all pointer-events-none -translate-y-2/4 left-6 text-error top-2/4">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
