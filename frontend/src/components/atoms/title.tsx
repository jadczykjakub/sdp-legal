import React from "react";

import { title, large, medium, underscore } from "./title.module.scss";

export interface ITitleProps {
  className?: string;
  Tag?: React.ElementType;
  children: React.ReactNode;
  size?: "medium" | "large";
  isUnderscored?: boolean;
}

const Title: React.FC<ITitleProps> = ({
  Tag = "h2",
  className = "",
  children,
  size = "large",
  isUnderscored = true,
}) => {
  return (
    <Tag
      className={`${title} ${className} ${getSizeClass(size)} ${
        isUnderscored ? underscore : ""
      }`}
    >
      {children}
    </Tag>
  );
};

function getSizeClass(size: ITitleProps["size"]): string {
  if (size === "large") return large;
  if (size === "medium") return medium;
  return "";
}

export default Title;
