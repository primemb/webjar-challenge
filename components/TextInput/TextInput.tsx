import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ITextInputProps {
  label: string;
  name: string;
  value: string;
  perfixIcon?: IconProp;
  onChange: (value: string) => void;
  type: "text" | "password" | "number";
}

const TextInput = ({
  label,
  name,
  perfixIcon,
  onChange,
  type,
  value,
}: ITextInputProps) => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <label
        className="w-8/12 md:w-6/12  pr-2 mb-3 font-normal text-lg"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="w-8/12 md:w-6/12 flex items-center justify-start border border-brand-grey-5 py-4 px-4 rounded-2xl">
        {perfixIcon && (
          <FontAwesomeIcon className="text-brand-grey-5" icon={perfixIcon} />
        )}
        <input
          className="w-full outline-none pr-4"
          placeholder={`${label} خود را وارد کنید`}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          name={name}
          id={name}
          type={type}
        />
      </div>
    </div>
  );
};

export default TextInput;
