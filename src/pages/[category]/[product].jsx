import Layout from "@/components/layout";
import Product from "@/components/product";
import axios from "axios";

export default function Home({ data }) {
  return (
    <Layout>
      <Product product={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.product;
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/productos`, {
      params: { slug }
    })
    data = res.data
  } catch (error) {
  }
  return { props: { data } }
}