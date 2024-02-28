import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud 9",
  description: "A product of ATOFFETI DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="http://localhost:8097"></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
