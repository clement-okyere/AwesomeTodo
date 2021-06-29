import React from "react";


type IInputProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  cssclass: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  value: string | number;
};

const Input = ({ label,
                type,
                placeholder,
                id,
                cssclass,
                onChange,
                onBlur,
                value
            }: IInputProps) => {
      return (
      <div className="form_group">
        <label htmlFor={id}>{label}</label>
              <input
                  id={id}
                  type={type}
                  placeholder={label}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
              />
      </div>
    );
}

export default Input;