import "./globals.css";
import type { Metadata, Viewport } from "next";
import ToastProvider from "@/components/providers/ToastProvider";
import { Shippori_Mincho, EB_Garamond } from "next/font/google";
import { GoogleTagManager } from "@/components/ui/module/GoogleTagManager";

// Shippori Mincho フォントの設定（日本語）
const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori-mincho",
});

// EB Garamond フォントの設定（英字）
const ebGaramond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 占い　タロット　風蘭女音",
    default: "占い　タロット　風蘭女音",
  },
  description:
    "占い　タロット　風蘭女音は、タロットカードによる鑑定サービスを提供しています。対面鑑定・オンライン鑑定・出張鑑定に対応。あなたの悩みをカードに問いかけ、幸せへと導けるようお手伝いします。",
  keywords: [
    "占い",
    "タロット",
    "風蘭女音",
    "タロット占い",
    "鑑定",
    "対面鑑定",
    "オンライン占い",
    "出張鑑定",
    "東中野",
    "中野区",
  ],
  icons: {
    icon: "/common/favicon.png",
  },
  openGraph: {
    title: "占い　タロット　風蘭女音",
    description:
      "タロットカードによる鑑定サービス。対面鑑定・オンライン鑑定・出張鑑定に対応。あなたの悩みをカードに問いかけ、幸せへと導けるようお手伝いします。",
    type: "website",
    locale: "ja_JP",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body
        className={`${shipporiMincho.className} text-baseColor bg-bgLight ${ebGaramond.variable}`}
      >
        <GoogleTagManager gtmId="GTM-XYZ" />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
