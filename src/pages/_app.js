import { Fragment } from "react";
import "@/styles/globals.css";
import GoogleTagManager from "@/lib/GoogleTagManager";

export default ({ Component, pageProps }) => (
  <Fragment>
    <Component {...pageProps} />
    <GoogleTagManager gtmId="GTM-KCZFX48J" />
  </Fragment>
)
