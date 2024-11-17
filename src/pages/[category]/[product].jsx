import Layout from "@/components/layout";
import Product from "@/components/product";
import axios from "axios";
import CEO from "@/components/util/CEO";
import get from "lodash/get";

export default function Producto({ data }) {
  return (
    <Layout>
      <CEO title={get(data, "name", "")} description={get(data, "description", "")} image={get(data, "images[0].imageSrc", "")} />
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