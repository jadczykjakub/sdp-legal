import React from "react";

import { layout, header, footer, main } from "./main-layout.module.scss";
import { grid } from "../../src/styles/grid.module.scss";

import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";

interface IMainLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`${className} ${layout} ${grid} `}>
      <Header className={header} />
      <main className={main}>{children}</main>
      <Footer className={footer} />
    </div>
  );
};

export default MainLayout;
