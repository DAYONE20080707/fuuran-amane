// components/plan/Plan_03.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PlanCard from "@/components/ui/ItemCard/PlanCard_03"
import PlanOption from "@/components/ui/module/PlanOption"
import PlanList from "@/components/ui/ItemCard/PlanList_03"
import SectionContent from "@/components/ui/frame/SectionContent"

const Plan_03 = () => {
  return (
    <div id="price" className="border-b border-accentColor">
      <SectionContent className="bg-bgLight">
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="鑑定料金"
            mainTitle="Price"
            subTitleClassName=""
            titleClassName=""
          />
          <PlanList />
        </section>
      </SectionContent>
    </div>
  )
}

export default Plan_03
