import React, { ReactNode } from "react";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  ogImgPath?: string;
  url?: string;
  domain?: string;
  type?: string;
  siteName?: string;
  favicon?: string;
  twitterID?: string;
  facebookbAppID?: string;
  children?: ReactNode | ReactNode[];
}

const MetaHead = ({
  title = "Uliy/ユリー | 丹波篠山市のWEBサイト・ECサイト制作会社",
  description = "Uliy/ユリーはWEBサイト・ECサイトの制作を行う、丹波篠山市にある制作会社 ホームページ制作・WEB広告・出版印刷物の作成まで、WEBの構築から集客・収益化までを一貫してサポート致します。",
  ogImgPath = "",
  url = "",
  domain = "",
  type = "website",
  siteName = "Uliy/ユリー | 丹波篠山市WEBサイト・ECサイトの制作会社",
  favicon = "",
  twitterID = "",
  facebookbAppID = "",
  children,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href={favicon} />
      <link rel="canonical" href={url}></link>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImgPath} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content={twitterID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgPath} />
      <meta property="fb:app_id" content={facebookbAppID} />
      {children}
    </Head>
  );
};

export default MetaHead;
