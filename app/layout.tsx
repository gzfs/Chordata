import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ChorData",
  description: "Realtime Fish Catch Data at your Fingertips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
