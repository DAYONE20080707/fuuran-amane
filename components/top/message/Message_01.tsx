// components/message/Message_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"

// メッセージ
const Message_01 = () => {
  return (
    <div id="reservation" className="border-b border-accentColor">
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline subTitle="鑑定予約" mainTitle="Reservation" />
          <iframe

            width="100%"
            height="1000px"
            src="//airrsv.net/fuuranamane/calendar/embed/"
          ></iframe>

          <div
            style={{
              textAlign: "right",
              fontSize: "80px",
              color: "#555",
              margin: "16px 0 0 0",
              lineHeight: "160%",
            }}
          >

          </div>
        </section>
      </SectionContent>
    </div>
  )
}

export default Message_01
