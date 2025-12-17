// components/news/News_01.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { microcms } from "@/lib/microcms"
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import { newsFetch } from "@/lib/api/newsFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface NewsProps {
  limit?: number;
}

const News_01 = ({ limit = 3 }: NewsProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}.${month}.${day}`;
    } catch (error) {
      return dateString;
    }
  };

  useEffect(() => {
    // 旧データフェッチ処理
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "news",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch news:", error)
      }
      setLoading(false)
    }

    getWorks()
    */

    // 新データフェッチ処理（共通化）
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await newsFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        if (mounted) setContents([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [limit]);

  if (loading) return <h1>Loading...</h1>;
  if (!contents || contents.length === 0) return <h1>No contents</h1>;

  return (
    <div id="news" className="border-b border-accentColor">
      <SectionContent className=" bg-bgLight">
        <section className="md:flex gap-[120px] max-w-[1240px] mx-auto">
          <div className="md:max-w-[206px] ">
            <ContentHeadline
              subTitle="お知らせ"
              mainTitle={
                <>
                  What's <br />
                  New
                </>
              }
            />
          </div>

          <div className="w-full mt-10 md:mt-0">
            {contents.map((post, index) => (
              <div key={post.id} className="border-b border-borderGray py-6">
                <div className="md:flex gap-4">
                  {post.date && (
                    <p className="text-base md:text-lg tracking-[0.03em] w-[93px]">
                      {formatDate(post.date)}
                    </p>
                  )}
                  <div
                    className="mt-6 md:mt-0 text-base md:text-lg tracking-[0.03em] leading-[180%]"
                    dangerouslySetInnerHTML={{
                      __html: post.content || post.description || "",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionContent>
    </div>
  );
};

export default News_01;
