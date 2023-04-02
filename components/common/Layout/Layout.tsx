import React, { ReactNode } from "react";
import { Footer, Header, MetaHead } from "@components/common";
import style from "./Layout.module.scss";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <MetaHead />
      <div className={style.root}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
