import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";
import ContentHeadline from "../frame/ContentHeadline";

interface AboutSection_01Props {
  title: string; // 見出しテキスト
  subtitle?: string; // サブタイトル（任意）
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSection_01 = ({
  title,
  subtitle,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_01Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <div className="md:max-w-[1240px] px-5 md:flex items-start justify-between mx-auto gap-10">
        <ContentHeadline
          subTitle=""
          mainTitle={
            <>
              What's <br />
              We can do?
            </>
          }
          subTitleClassName=""
          titleClassName=""
        />
        <div className="w-full md:max-w-[660px] mt-10 md:mt-0">
          <h3 className="text-2xl md:text-[40px] leading-[160%] tracking-[0.03em] text-accentColor">
            {convertNewLines(title)}
          </h3>
          {subtitle && (
            <p className="text-base md:text-[28px] mt-6 tracking-[0.03em] leading-[180%]">
              {subtitle}
            </p>
          )}
          <p className=" leading-relaxed md:leading-[250%] text-base md:text-[22px] mt-10 md:mt-10 whitespace-pre-line tracking-[0.03em]">
            {description}
          </p>
          {(position || name) && (
            <p className="mt-10 text-base md:text-lg !leading-[250%] tracking-[0.03em]">
              {position}
              <br />
              {name}
            </p>
          )}
          {buttonHref && (
            <MoreButton href={buttonHref} className="mt-10" variant="accent">
              About us
            </MoreButton>
          )}
        </div>
      </div>
      <section className="md:w-full h-[250px] md:h-[480px] mx-auto mt-10 md:mt-[120px]  flex justify-center relative ">
        <Image
          src="/top/about/about.jpg"
          alt="message"
          fill
          className="object-cover"
        />
      </section>
    </>
  );
};

export default AboutSection_01;
