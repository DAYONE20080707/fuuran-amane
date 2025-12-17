// components/profile/Profile_03.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_01";
import SectionContent from "@/components/ui/frame/SectionContent";

const Profile_03 = () => {
  return (
    <div id="access" className="border-b border-accentColor">
      <SectionContent className="">
        <section className="md:max-w-[1200px] mx-auto md:flex gap-[120px]">
          <div className="w-[192px]">
            <ContentHeadline subTitle="アクセス" mainTitle="Access" />
          </div>

          <div className="mt-10 md:mt-0">
            <div>
              <p className="text-base md:text-lg flex items-center pb-4 md:py-4 border-b border-borderGray leading-[180%]">
                占い　タロット　風蘭女音
              </p>
              <ProfileCard
                label="住所"
                value={`〒164-0003 東京都中野区東中野1-51-1 村上ビル302号室\n中華麺「大盛軒」さん建物内の横入口から入り、階段で3階へ上がってください。（エレベーターはございませんのでご了承くださいませ）`}
              />
              <ProfileCard
                label="アクセス"
                value={`JR中央・総武線 【東中野駅】東口より徒歩1分\n都営大江戸線　【東中野駅】徒歩4分`}
              />
              <ProfileCard label="営業時間" value="11:00〜20:00" />
              <ProfileCard label="定休日" value="不定休" />
            </div>
          </div>
        </section>
      </SectionContent>
    </div>
  );
};

export default Profile_03;
