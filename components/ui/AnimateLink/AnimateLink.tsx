import Link from "next/link";
import React from "react";

import style from "./AnimateLink.module.scss";

interface Props {
  title: string;
  href: string;
}

const AnimateLink = ({ title, href }: Props) => {
  return (
    <div className={style.sample_link}>
      <Link href={href} aria-label={title + "　リンクボタン"}>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default AnimateLink;
