// import { Inter } from "next/font/google";
"use client";
import "../globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useEffect, useRef } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function CloudLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div id="children"> {children}</div>
      <Footer footerId="footer" />
    </div>
  );
}
