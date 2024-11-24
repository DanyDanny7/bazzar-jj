import React from 'react'
import Layout from "@/components/layout";
import dynamic from 'next/dynamic';

const ComprobanteDeProductos = dynamic(() => import('@/components/ComprobanteDeProductos'), { ssr: false });

export default function Example() {
    return (
        <Layout>
            <ComprobanteDeProductos />
        </Layout>
    )
}
