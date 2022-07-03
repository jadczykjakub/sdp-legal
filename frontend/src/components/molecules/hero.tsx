import React from "react";

import {
  container,
  textContainer,
  title as titleStyle,
  subtitle as subtitleStyle,
  text as textStyle,
  button,
  image as imageStyle,
  ratio,
} from "./hero.module.scss";

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Button from "../atoms/button";
import { useTranslation } from "react-i18next";
import RatioImage from "../atoms/ratio-image";

interface IHeroProps {
  className?: string;
  title: string;
  subTitle: string;
  text: string;
  image: IGatsbyImageData;
}

const Hero: React.FC<IHeroProps> = ({
  className = "",
  title,
  subTitle,
  text,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${className} ${container}`}>
      <div className={textContainer}>
        <h1 className={titleStyle}>{title}</h1>
        <h2 className={subtitleStyle}>{subTitle}</h2>
        <p className={textStyle}>{text}</p>
        <Button fontSize="big" className={button}>
          {t("hero.button")}
        </Button>
      </div>

      <GatsbyImage alt="" image={image} className={imageStyle} />
    </div>
  );
};

export default Hero;
