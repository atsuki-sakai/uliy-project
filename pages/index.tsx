import style from "@styles/pages/index.module.scss";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const imagesSrc: string[] = ["/images/top-background-image.webp", "", ""];
export default function Home() {
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <>
      <div className={style.root}>
        <div className={style.image_container}>
          <Image
            className={style.background_image}
            src={"/images/top-background-image.webp"}
            width={1080}
            height={1920}
            alt="backgroud image"
          />
          <div className={style.overlay}>
            <div className={style.overlay_container}>
              <h3>あなたの会社のIT部門に。</h3>
              <p>Uliy is Consultant Company</p>
              <div>
                <span>お問合せはこちら</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.main_content}>
          <div className={style.section_header}>
            <p>ABOUT US</p>
            <span>ユリーについて</span>
          </div>
        </div>
      </div>
    </>
  );
}
