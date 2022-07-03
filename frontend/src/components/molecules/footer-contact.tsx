import React from "react";

import { container } from "./footer-contact.module.scss";
import Title from "../atoms/title";

interface IFooterContactProps {
  className?: string;
}

const FooterContact: React.FC<IFooterContactProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${container}`}>
      <Title Tag={"h4"} size={"large"}>
        Get in touch
      </Title>
    </div>
  );
};

export default FooterContact;
