import React from "react";

import { container, li, ul } from "./we-help-with.module.scss";
import Title from "../atoms/title";
import LiItem from "../atoms/li-item";

interface IWeHelpWithProps {
  className?: string;
}

const listData = [
  "Patents. We guide through nuances of patent law to ensure effective protection of innovations.",
  "IP Litigation. We are experts at litigating intellectual property & unfair competition cases in Poland.",
  "Trademarks. We register, maintain, and enforce trademarks to increase the value of brands.",
  "EP Validations. We provide a multi-step verification scheme that allows us to ensure quality and safety of a process to validate European Patents.",
  "Designs. We draft & implement strategies for optimal protection of a product.",
  "IP Transactions. We assist with intellectual property contracts such as licenses or M&As involving important intellectual assets.",
  "Copyright. We maximize the benefits arising from obtaining rights to a copyrightable work.",
  "Regulatory. We navigate through regulatory issues related to R&D, e-commerce, and GDPR.",
];

const WeHelpWith: React.FC<IWeHelpWithProps> = ({ className = "" }) => {
  return (
    <div className={`${className} ${container}`}>
      <Title Tag={"h4"} size={"large"}>
        We help clients with
      </Title>

      <ul className={ul}>
        {listData.map((liElem, index) => {
          return (
            <LiItem key={index} className={li}>
              {liElem}
            </LiItem>
          );
        })}
      </ul>
    </div>
  );
};

export default WeHelpWith;
