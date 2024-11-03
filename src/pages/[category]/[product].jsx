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
  // Fetch data from external API
  let data = {}
  try {
    const res = await axios(`http://localhost:3000/api/product`, {
      params: { slug }
    })
    data = res.data
  } catch (error) {
  }
  return { props: { data } }
}