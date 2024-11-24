import "@/styles/globals.css";
import Providers from "@/lib/Providers";

export default ({ Component, pageProps }) =>
    <Providers>
        <Component {...pageProps} />
    </Providers>
