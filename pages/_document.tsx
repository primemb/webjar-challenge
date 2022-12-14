import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html dir="rtl">
      <Head />
      <body>
        <Main />
        <div id="modal" />
        <div id="sidebar" />
        <NextScript />
      </body>
    </Html>
  );
}
