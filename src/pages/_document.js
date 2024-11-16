import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html lang="es">
      <Head >

        {/* Google Tag Manager */}
        <Script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
          `}} />
        {/* End Google Tag Manager */}

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bazzar JJ" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">

        {/* Google Tag Manager(noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCZFX48J" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* End Google Tag Manager(noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}