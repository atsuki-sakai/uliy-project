import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "@components/icons";

import style from "./Header.module.scss";
import { AnimateLink } from "@components/ui";

const Header = () => {
  const onDrawerOpen = () => {
    console.log("drawer open");
  };
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Link href={"/"}>
          <Image
            className={style.image}
            src={"/images/uliy-logo.webp"}
            width={90}
            height={45}
            alt="Logo"
          />
        </Link>
        <button
          className={style.moobile_menu}
          aria-label="メニューボタン"
          onClick={onDrawerOpen}
        >
          <Menu className={style.menu_icon} />
        </button>
        <div className={style.desktop_menu}>
          <div>
            <AnimateLink title="ホーム" href="/" />
          </div>
          <div>
            <AnimateLink title="お問い合せ" href="/" />
          </div>
          <div>
            <AnimateLink title="料金プラン" href="/" />
          </div>
        </div>
        <div className={style.dammy_container}>ダミー</div>
      </div>
    </div>
  );
};

export default Header;
