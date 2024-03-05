"use client";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism.css";
// import "../css/prism.css";

export default function CodeSnippet({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="code-snippet ">
      {" "}
      <pre className="code-pre">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
