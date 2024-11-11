import { GoogleTagManager } from '@next/third-parties/google';

export default () => {
    return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
}