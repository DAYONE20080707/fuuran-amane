// components/message/Message_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";

// メッセージ
const Message_01 = () => {
  return (
    <div id="resavation" className="border-b border-accentColor">
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline subTitle="鑑定予約" mainTitle="Resavation" />
          <div className="mt-10">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID%40group.calendar.google.com&ctz=Asia%2FTokyo"
              width="100%"
              height="600"
              style={{ border: "0" }}
              scrolling="no"
              className="w-full h-[400px] md:h-[600px]"
            />
          </div>
        </section>
      </SectionContent>
    </div>
  );
};

export default Message_01;
