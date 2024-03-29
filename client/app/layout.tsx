import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud 9 by atoffettidev, anthony toffetti",
  description:
    "Cloud 9 is a software development company produced by ATOFFETTIDEV LLC. Cloud 9 displays previous work and a blog with articles and tutorials meant to help developers implement new technology into their websites. Cloud 9's blog will often talk about java script, nodejs, react, nextjs, redux, express, animations, deployments and more.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        {" "}
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
