import style from "@styles/pages/index.module.scss";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { DownArrow } from "@components/icons";

const imagesSrc: string[] = ["/images/top-background-image.webp", "", ""];
export default function Home() {
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
          <div className={style.section_about_us}>
            <div className={style.section_header}>
              <p>About Us</p>
              <span>ユリーについて</span>
            </div>
            <div className={style.description_container}>
              <p>
                「ダイバーシティ3.0」を目標に 自走する組織デザインをサポートする
                人材育成・組織開発プログラムです
              </p>
              <span>
                コーチングやワークショップを用いて社員一人ひとりが自発的に動き、
                その集合体として自走する組織づくりを目指します。
              </span>
            </div>
            <div className={style.about_content}>
              <div className={style.about_container}>
                <span>What’s</span>
                <p>“Diversity3.0” ?</p>
                <span>ダイバーシティ3.0とは？</span>
                <div>
                  <div className={style.about_wrapper}>
                    <div className={style.about_item}>
                      <p>
                        女性、障がい者、外国籍の社員など人数規模の小さい、特定のセグメントを示すことが従来多かった「ダイバーシティ」。しかし、性別や戸籍などに加え、働き方やスキル、価値観、健康状態など誰しもが多様な個性を持ち合わせています。そのため、社員全員がダイバーシティの一員であり、それぞれの個性や強みを活かした組織づくりこそ、人的資本経営を支えるダイバーシティ戦略だとLYLは考えています。
                      </p>
                    </div>
                    <div className={style.about_item}>
                      <Image
                        className={style.about_image}
                        src={"/images/top-background-image.webp"}
                        width={1920}
                        height={1080}
                        alt="about us image 1"
                      />
                    </div>
                  </div>
                  <div className={style.about_wrapper_2}>
                    <div className={style.about_item}>
                      <p>
                        女性、障がい者、外国籍の社員など人数規模の小さい、特定のセグメントを示すことが従来多かった「ダイバーシティ」。しかし、性別や戸籍などに加え、働き方やスキル、価値観、健康状態など誰しもが多様な個性を持ち合わせています。そのため、社員全員がダイバーシティの一員であり、それぞれの個性や強みを活かした組織づくりこそ、人的資本経営を支えるダイバーシティ戦略だとLYLは考えています。
                      </p>
                    </div>
                    <div className={style.about_item}>
                      <Image
                        className={style.about_image}
                        src={"/images/top-background-image.webp"}
                        width={1920}
                        height={1080}
                        alt="about us image 1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.section_approach}>
            <div className={style.section_header}>
              <p>Our Approach</p>
              <span>アプローチ</span>
            </div>
            <div className={style.approach_description}>
              <span>
                個々の在りたい姿を明確にし、 ワークショップで社員自身による
                周囲を巻き込んだチャレンジの創出を狙います。
              </span>
            </div>
            <div className={style.approach_content}>
              <div className={style.approach_item}>
                <p>Coaching</p>
                <div className={style.strong_text}>
                  <p>来店者数アップ</p>
                </div>
                <span>現状を把握し改善策を提案</span>
                <ul className={style.text_list}>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                </ul>
              </div>
              <div className={style.multi}>×</div>
              <div className={style.approach_item_2}>
                <p>Coaching</p>
                <div className={style.strong_text}>
                  <p>来店者数アップ</p>
                </div>
                <span>現状を把握し改善策を提案</span>
                <ul className={style.text_list}>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                </ul>
              </div>
            </div>
            <div className={style.approach_content_2}>
              <div className={style.plus}>+</div>
              <div className={style.approach_item}>
                <p>Coaching</p>
                <div className={style.strong_text}>
                  <p>来店者数アップ</p>
                </div>
                <span>現状を把握し改善策を提案</span>
                <ul className={style.text_list}>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                  <li>社員のモチベーションアップ</li>
                </ul>
              </div>
            </div>
            <div className={style.icon_container}>
              <DownArrow className={style.down_arrow_icon} />
            </div>
            <div className={style.result_content}>
              <div className={style.result_item}>
                <div className={style.result_header}>
                  <span>GOAL</span>
                  <div></div>
                  <p>Coaching</p>
                </div>
                <div className={style.result_container}>
                  <p>
                    そしてLYLが定義する「ダイバーシティ3.0」とは、その一人ひとりの個性が活かせる環境作りを行うこと。
                  </p>
                  <span>人材育成・組織開発プログラム</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.section_plan}>
            <div className={style.section_header}>
              <p>Plan</p>
              <span>プラン</span>
            </div>
            <div className={style.plan_menu}>
              <div className={style.plan_content}>
                <div className={style.plan_header}>
                  <p>SNS Consultant</p>
                  <span>SNS運用支援</span>
                  <Image
                    src={"/images/uliy-logo.webp"}
                    width={600}
                    height={600}
                    alt="plan image"
                  />
                </div>
                <div className={style.plan_container}>
                  <p>
                    社内外への発信による企業ブランディングの向上サポートを行っています。
                  </p>
                  <span>
                    note媒体にLYLのプログラム参加者へのインタビュー記事を作成。対象者の学びの共有や採用時の企業の取り組み紹介としてもご活用頂けます。社内へのプログラム紹介などにご活用できる動画制作も可能です。
                  </span>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
              </div>
            </div>
            <div className={style.plan_menu}>
              <div className={style.plan_content}>
                <div className={style.plan_header}>
                  <p>SNS Advertisement</p>
                  <span>SNS広告</span>
                  <Image
                    src={"/images/uliy-logo.webp"}
                    width={600}
                    height={600}
                    alt="plan image"
                  />
                </div>
                <div className={style.plan_container}>
                  <p>
                    社内外への発信による企業ブランディングの向上サポートを行っています。
                  </p>
                  <span>
                    note媒体にLYLのプログラム参加者へのインタビュー記事を作成。対象者の学びの共有や採用時の企業の取り組み紹介としてもご活用頂けます。社内へのプログラム紹介などにご活用できる動画制作も可能です。
                  </span>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
              </div>
            </div>
            <div className={style.plan_menu}>
              <div className={style.plan_content}>
                <div className={style.plan_header}>
                  <p>MEO</p>
                  <span>マップエンジン最適化</span>
                  <Image
                    src={"/images/uliy-logo.webp"}
                    width={600}
                    height={600}
                    alt="plan image"
                  />
                </div>
                <div className={style.plan_container}>
                  <p>
                    社内外への発信による企業ブランディングの向上サポートを行っています。
                  </p>
                  <span>
                    note媒体にLYLのプログラム参加者へのインタビュー記事を作成。対象者の学びの共有や採用時の企業の取り組み紹介としてもご活用頂けます。社内へのプログラム紹介などにご活用できる動画制作も可能です。
                  </span>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
              </div>
            </div>
            <div className={style.plan_menu}>
              <div className={style.plan_content}>
                <div className={style.plan_header}>
                  <p>External Site Linkage</p>
                  <span>外部サイト連携</span>
                  <Image
                    src={"/images/uliy-logo.webp"}
                    width={600}
                    height={600}
                    alt="plan image"
                  />
                </div>
                <div className={style.plan_container}>
                  <p>
                    社内外への発信による企業ブランディングの向上サポートを行っています。
                  </p>
                  <span>
                    note媒体にLYLのプログラム参加者へのインタビュー記事を作成。対象者の学びの共有や採用時の企業の取り組み紹介としてもご活用頂けます。社内へのプログラム紹介などにご活用できる動画制作も可能です。
                  </span>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
                <div className={style.plan_item}>
                  <p>組織全体の学びの共有として</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
