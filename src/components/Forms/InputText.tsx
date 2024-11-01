import React, { forwardRef, LegacyRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  width?: string;
  disabled?: boolean;
  placeholder: string;
  otherStyles?: string;
  error?: FieldError | undefined;
  value?: number | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef(
  (
    { type, placeholder, otherStyles, error, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement> | undefined
  ) => {
    return (
      <>
        <input
          className={`shadow appearance-none border rounded w-full h-9 md:h-11 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4 ${otherStyles}`}
          type={type}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
        {error && (
          <p className="text-sm text-action-warning text-end px-2">
            {error.message}
          </p>
        )}
      </>
    );
  }
);
export default FormInput;
