import { GoogleTagManager } from '@next/third-parties/google';

export default () => {
    console.log({ env: process.env.NEXT_PUBLIC_GTM })
    return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
}