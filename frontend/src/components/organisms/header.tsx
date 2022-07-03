import React from "react";

import { header, innerContainer, logo, scrolled } from "./header.module.scss";

import { gridWide } from "../../styles/grid.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import useWindowScroll from "../../hooks/use-window-scroll";

interface IHeaderProps {
  className?: string;
}

const Header: React.FC<IHeaderProps> = ({ className = "" }) => {
  const { y } = useWindowScroll();
  const isScrolled = y >= 50;

  return (
    <header
      className={`${className} ${header} ${gridWide} ${
        isScrolled ? scrolled : ""
      } `}
    >
      <div className={innerContainer}>
        <StaticImage
          src="../../assets/images/sdp_logo.jpg"
          alt=""
          className={logo}
        />
      </div>
    </header>
  );
};

export default Header;
