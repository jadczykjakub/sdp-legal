import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  contact,
  contactDetails,
  container,
  link,
  text,
  envelope,
  textWrapper,
} from "./footer-map.module.scss";
import { grid } from "../../styles/grid.module.scss";

import Envelope from "../../assets/images/svg/envelope.svg";

interface IFooterMapProps {
  className?: string;
}

const FooterMap: React.FC<IFooterMapProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${container}`}>
      <StaticImage
        src="../../assets/images/map_footer.jpg"
        alt=""
        quality={100}
      />

      <div className={`${contact} ${grid} `}>
        <div className={contactDetails}>
          <a className={`${link} ${text}`}>
            <Envelope className={envelope} /> office@sdp.legal
          </a>
          <div className={textWrapper}>
            <p className={text}>SDP Sierżant Dudziński sp. j.</p>
            <p className={text}>ul. Rakowiecka 41/10</p>
            <p className={text}>02-521 Warsaw, Poland</p>
            <p className={text}>VAT ID: 521 392 76 28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMap;
