// components/message/Message_04.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import Link from "next/link";

// メッセージ
const Message_04 = () => {
  return (
    <div id="about" className="border-b border-accentColor">
      <SectionContent>
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <div className=" md:flex justify-start gap-[120px]">
            <div className="w-[210px]">
              <ContentHeadline subTitle="占い師紹介" mainTitle="About" />
            </div>

            <div>
              <p className="text-base md:text-lg tracking-[0.03em] leading-[180%]">
                タロットカードを知らない頃、旅先で出会った和尚（注釈１）に唯一認められる。
                <br />
                宮城県仙台市某喫茶店にて対面鑑定→チャット占いアプリ会社に所属→東京都内百貨店にて対面鑑定占い師→独立し、関東地方のレンタルルーム等で対面鑑定とオンライン鑑定、全国にて出張鑑定を行う。占い歴15年
              </p>
              <p className="mt-6 text-xs md:text-[15px] tracking-[0.03em] leading-[180%]">
                （注釈1）高野山真言宗総本山金剛峯寺にて幼少期から修行し、現在は口コミ予約のみで霊視透視を行っている。
              </p>
              <h3 className="mt-10 md:mt-16 text-lg md:text-xl leading-[160%] text-accentColor pb-2 border-b border-borderGray">
                鑑定種類
              </h3>
              <p className="mt-2 text-base md:text-lg tracking-[0.03em] leading-[180%]">
                恋愛、出逢い、片思い、遠距離、結婚、相性、離婚、不倫、復縁、人間関係、仕事、適職、金運、家族、育児、開運、運勢、相手の気持ち
              </p>
              <div className="mt-10 md:mt-16 p-4 md:p-4 border border-borderGray">
                <p className="text-xs md:text-[15px] tracking-[0.03em] leading-[180%] mb-4">
                  <Link href="/pdf/fuuranamane-line-terms.pdf" className="underline">
                    利用規約
                  </Link>
                  に基づき下記の項目の鑑定は行っておりませんのでご注意ください。
                </p>
                <p className="text-xs md:text-[15px] tracking-[0.03em] leading-[180%]">
                  <span className="text-accentColor">●</span>
                  法律や病気等の専門家の知識が必要な事項 　
                  <span className="text-accentColor">●</span>
                  人の生死に関わる事項 　
                  <span className="text-accentColor">●</span>
                  ギャンブル、宝くじ、株、投資等 　
                  <span className="text-accentColor">●</span> 試験の合否 　
                  <span className="text-accentColor">●</span> 紛失物や人物捜索
                  　<span className="text-accentColor">●</span>
                  犯罪や各種法令に違反する可能性がある事項 　
                  <span className="text-accentColor">●</span>
                  その他本サービスに適さないと当方が判断する相談事項
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionContent>
    </div>
  );
};

export default Message_04;
