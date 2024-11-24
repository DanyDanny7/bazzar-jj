import React from 'react';
import Layout from "@/components/layout";
import dynamic from 'next/dynamic';
import CEO from "@/components/util/CEO";// Importa el componente CEO desde la carpeta de utilidades
import sumBy from "lodash/sumBy";

const ComprobanteDeProductosComponent = dynamic(() => import('@/components/ComprobanteDeProductos'), { ssr: false });

const ComprobanteDeProductos = ({ products, error }) => {

    const getDetail = () => {
        const quantity = sumBy(products, "quantity");
        const total = Number((sumBy(products, "total")).toFixed(2)).toLocaleString();
        return `${quantity} producto${quantity !== 1 ? "s" : ""} por $${total}`
    }

    return (
        <Layout>
            <CEO
                title={`Comprobante de productos`}
                description={getDetail()}
                image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
            />
            <ComprobanteDeProductosComponent products={products} error={error} />
        </Layout>
    )
}

export default ComprobanteDeProductos;

export async function getServerSideProps(ctx) {
    const p = ctx.query.p;
    try {
        return { props: { products: JSON.parse(decodeURIComponent(p)), error: false } }
    } catch (error) {
        return { props: { products: [], error: true } }
    }
}