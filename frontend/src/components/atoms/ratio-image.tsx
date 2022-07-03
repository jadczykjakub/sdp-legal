import React from "react";

import { ratioContainer, imgBox, img } from "./ratio-image.module.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface IRatioImageProps {
  className?: string;
  image: IGatsbyImageData | undefined;
  alt?: string;
  ratioClass?: string;
}

const RatioImage: React.FC<IRatioImageProps> = ({
  className = "",
  alt,
  image,
  ratioClass = "",
}) => {
  return (
    <div className={className}>
      <div className={`${ratioContainer} ${ratioClass}`}>
        <div className={imgBox}>
          {image && (
            <GatsbyImage
              alt={alt || ""}
              image={image}
              className={img}
              objectFit="contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RatioImage;
