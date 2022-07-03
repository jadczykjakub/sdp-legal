import React from "react";

import { button, big, small } from "./button.module.scss";

interface IButtonProps {
  className?: string;
  children?: string;
  fontSize?: "big" | "small";
}

const Button: React.FC<IButtonProps> = ({
  className = "",
  children,
  fontSize = "big",
}) => {
  return (
    <button className={`${className} ${button} ${getFontSize(fontSize)}  `}>
      {children}
    </button>
  );
};

const sizesButton: { [key: string]: string } = {
  big: big,
  small: small,
};

const getFontSize = (fontSize: string) => {
  return sizesButton[fontSize];
};

export default Button;
