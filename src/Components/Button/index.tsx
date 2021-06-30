import React from "react";

type IButtonProps = {
  cssClass: string;
  type: "button" | "submit" | "reset";
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement> | void) => void;
  children?: React.ReactNode;
  disabled: boolean;
};

const Button = ({ cssClass,
       type,
       clickHandler,
       children,
      disabled = false
}: IButtonProps) => {
    return(
     <div className={cssClass}>
      <button
        type={type}
        onClick={clickHandler}
        disabled={disabled}
        >
          {children}
         </button>
        </div>
    )
}

export default Button;