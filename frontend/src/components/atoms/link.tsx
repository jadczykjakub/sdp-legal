import React from "react";

interface ILinkProps {
  className?: string;
}

const Link: React.FC<ILinkProps> = ({ className = "" }) => {
  return <div className={className}></div>;
};

export default Link;
