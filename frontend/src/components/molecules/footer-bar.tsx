import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  logo,
  copyright,
  privacy,
  innerContainer,
} from "./footer-bar.module.scss";
import { grid } from "../../styles/grid.module.scss";

interface IFooterBarProps {
  className?: string;
}

const FooterBar: React.FC<IFooterBarProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${container} ${grid}`}>
      <div className={innerContainer}>
        <StaticImage
          src="../../assets/images/sdp_logo_small.jpg"
          alt=""
          className={logo}
        />

        <p className={copyright}>© Copyright 2022 SDP - all rights reserved.</p>

        <a href="#" className={privacy}>
          Privacy policy
        </a>
      </div>
    </div>
  );
};

export default FooterBar;
