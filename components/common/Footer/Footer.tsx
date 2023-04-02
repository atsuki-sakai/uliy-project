import React from "react";

import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.root}>
        <div className={style.header}>
          <p>Welcome to</p>
          <span>Uliy</span>
          <small className={style.sub_text}>
            さあお店の可能性を広げましょう
          </small>
        </div>
        <div className={style.contact_container}>
          <button>お問い合せ</button>
        </div>
        <div className={style.line}></div>
        <div className={style.footer_info}>
          <Link href={"/"}>会社概要</Link>
          <Link href={"/"}>プライバシーポリシー</Link>
        </div>
        <p className={style.water_mark}>©︎ 2023 Uliy</p>
      </div>
    </footer>
  );
};

export default Footer;
