import KeyVisual_04 from "@/components/top/kv/KeyVisual_04";
import About_01 from "@/components/top/about/About_01";
import Message_01 from "@/components/top/message/Message_01";
import Message_04 from "@/components/top/message/Message_04";
import News_01 from "@/components/top/news/News_01";
import Plan_03 from "@/components/top/plan/Plan_03";
import Profile_03 from "@/components/top/profile/Profile_03";

// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_04 />
      <About_01 />
      <Message_04 />
      <News_01 />
      <Plan_03 />
      <Message_01 />
      <Profile_03 />
    </div>
  );
};

export default HomePage;
