import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import MainLayout from "../layouts/main-layout";
import WeHelpWith from "../components/molecules/we-help-with";

import { Link, Trans, useTranslation } from "react-i18next";

import { graphql } from "gatsby";
import Hero from "../components/molecules/hero";

interface IIndexPageProps {
  className?: string;
}

const IndexPage: React.FC<IIndexPageProps> = ({ data }) => {
  const { t } = useTranslation();

  const { home } = data;

  const image = getImage(data.heroImg.nodes[0].childrenImageSharp[0]);

  return (
    <div>
      <MainLayout>
        <Hero
          title={home.naglowek}
          subTitle={home.naglowek2}
          text={home.tekst_pod_naglowkiem}
          image={image}
        />

        <WeHelpWith />
      </MainLayout>
    </div>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    home: strapiHome(locale: { eq: $language }) {
      naglowek
      naglowek2
      tekst_pod_naglowkiem
    }
    heroImg: allFile(filter: { extension: { eq: "webp" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, quality: 100)
        }
      }
    }
  }
`;

export default IndexPage;
