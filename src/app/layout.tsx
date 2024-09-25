import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Furniro",
  description:
    "Funriro The e-Commerce Website design template is easy to customize, making it even easier for you to design your next website or project, and speed up your design workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
