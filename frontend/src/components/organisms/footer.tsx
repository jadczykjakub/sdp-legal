import React from "react";
import FooterBar from "../molecules/footer-bar";
import FooterMap from "../molecules/footer-map";
import FooterContact from "../molecules/footer-contact";

interface IFooterProps {
  className?: string;
}

const Footer: React.FC<IFooterProps> = ({ className = "" }) => {
  return (
    <footer className={`${className} `}>
      <FooterContact />
      <FooterMap />
      <FooterBar />
    </footer>
  );
};

export default Footer;
