import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AiTutorChat } from "./components/AiTutorChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoRegulator – Trò chơi Điều tiết Kinh tế",
  description:
    "Web game giáo dục tương tác giúp sinh viên học và ôn tập kiến thức Chương 5 Kinh tế chính trị Mác – Lênin: Kinh tế thị trường định hướng XHCN và các quan hệ lợi ích kinh tế ở Việt Nam.",
  keywords: [
    "kinh tế chính trị",
    "XHCN",
    "Việt Nam",
    "game giáo dục",
    "EcoRegulator",
  ],
  openGraph: {
    title: "EcoRegulator – Trò chơi Điều tiết Kinh tế",
    description: "Game học Kinh tế chính trị Mác – Lênin Chương 5",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full bg-grid-pattern">
        {children}
        <AiTutorChat />
      </body>
    </html>
  );
}
