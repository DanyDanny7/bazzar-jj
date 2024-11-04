import Layout from "@/components/layout";
import Dashboard from "@/components/dashboard";
import axios from "axios";

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <Dashboard data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.category;
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`)
    data = res.data
  } catch (error) {
    console.log(error)
  }
  return { props: { data } }
}