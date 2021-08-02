import React from "react";

type IButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement> | void) => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Button = ({ className: cssClass,
       type = "button",
       clickHandler,
       children,
      disabled = false
}: IButtonProps) => {
    return (
        <button
          className={cssClass}
          type={type}
          onClick={clickHandler}
          disabled={disabled}
        >
          {children}
        </button>
    );
}

export default Button;