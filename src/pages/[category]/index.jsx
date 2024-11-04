import Layout from "@/components/layout";
import Category from "@/components/category";
import axios from "axios";

export default function Home({ data }) {
  return (
    <Layout>
      <Category data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.category;
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, {
      params: { slug }
    })
    data = res.data
  } catch (error) {

  }
  return { props: { data } }
}