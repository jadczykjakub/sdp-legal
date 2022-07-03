import React from "react";

import { container, liLogo } from "./li-item.module.scss";

interface ILiItemProps {
  className?: string;
  children?: React.ReactNode;
}

import ListLogo from "../../assets/images/svg/li_logo.svg";

const LiItem: React.FC<ILiItemProps> = ({ className = "", children }) => {
  return (
    <li className={`${className} ${container}`}>
      <ListLogo className={liLogo} /> {children}
    </li>
  );
};

export default LiItem;
