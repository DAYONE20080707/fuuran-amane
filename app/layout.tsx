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
    template: "%s | チョイスWeb制作",
    default: "チョイスのWeb制作は",
  },
  description: "チョイスは、",
  icons: {
    icon: "/common/favicon.png",
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
