// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_01";
import SectionContent from "@/components/ui/frame/SectionContent";

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent className="!pb-0 !px-0">
        <AboutSection
          title="道しるべ"
          subtitle={`タロットカードにてオリジナルの手法で占い、
                      メッセージをお伝えします。`}
          description={`苦難が断ち切れる強さを 持たせます。
            心が清々しく温かい気持ちに 変わります。
            新たな気付きや選択肢を 見出します。`}
          // buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  );
};

export default About_01;
