import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { name, text, control, className = "" } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      name={name}
      id={name}
      placeholder={text}
      {...props}
      {...field}
      className={`resize-none w-full px-6 h-[140px] py-4 text-sm font-medium mt-2 border outline-none text-text2 rounded-xl bg-transparent dark:border-darkStroke dark:text-white ${className}`}
    ></textarea>
  );
};

export default Textarea;
