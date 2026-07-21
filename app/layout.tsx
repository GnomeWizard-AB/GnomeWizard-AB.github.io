import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gnomewizard.top"),
  title: "Aleksei Besedin - 3D Animator, Rigger & Tech Animator",
  description:
    "Портфолио Aleksei Besedin: игровая 3D-анимация, rigging, technical animation, обучение и инструменты для Maya.",
  openGraph: {
    title: "Aleksei Besedin - 3D Animation · Rigging · Tech",
    description: "Game animation portfolio, mentoring and Maya tools.",
    type: "website",
    url: "https://gnomewizard.top",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleksei Besedin - 3D Animation · Rigging · Tech",
    description: "Game animation portfolio, mentoring and Maya tools.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1b0d08",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
