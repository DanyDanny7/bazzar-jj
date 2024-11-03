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
  // Fetch data from external API
  let data = {}
  try {
    const res = await axios(`http://localhost:3000/api/categories`, {
      params: { slug }
    })
    data = res.data
  } catch (error) {

  }
  return { props: { data } }
}