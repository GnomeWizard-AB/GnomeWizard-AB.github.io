import type { Viewport } from "next";
import "./globals.css";
import "./i18n.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1b0d08",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
