import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@/lib/GoogleAnalytics"

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics />
    </Html>
  );
}
