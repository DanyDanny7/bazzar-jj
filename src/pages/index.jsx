import Layout from "@/components/layout";
import Dashboard from "@/components/dashboard";
import axios from "axios";

export default function Home({ data }) {
  return (
    <Layout>
      <Dashboard data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, { params: { active: "true" } })
    data = res.data
  } catch (error) {
    console.log(error)
  }
  return { props: { data } }
}
