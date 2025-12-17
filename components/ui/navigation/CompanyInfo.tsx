//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo_header.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_square.png" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "占い　タロット　風蘭女音",
    companyPostalCode: "〒164-0003",
    companyAddress: " 東京都中野区東中野1-51-1\n村上ビル302号室",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
