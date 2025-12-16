// components/kv/KeyVisual_04.tsx
"use client";

import FirstViewContent from "@/components/top/kv/FirstViewContent";
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02";
import KeyVisualContent from "@/components/top/kv/KeyVisualContent";
import ScrollButton from "@/components/ui/button/ScrollButton";

// キービジュアル
const KeyVisual_04 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section");
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <FirstViewContent className="mt-[74px] relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto max-w-[1700px]">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-[937px]" />
        </section>
        <TopPageHeadline
          subtitleTop={<>占い タロット</>}
          mainTitle={<>風蘭 女音</>}
          description={
            <>
              あなたの悩みをカードに問いかけ、
              <br />
              幸せへと導けるようお手伝いします
            </>
          }
          className="w-full text-center absolute left-1/2  transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-5"
        />
        <div className="absolute left-1/2  transform -translate-x-1/2 bottom-4 md:bottom-20">
          <ScrollButton onClick={scrollToNextSection} color="white" />
        </div>
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_04;
