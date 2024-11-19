import Layout from "@/components/layout";
import Dashboard from "@/components/dashboard";
import axios from "axios";
import CEO from "@/components/util/CEO";

export default function Home({ data }) {
  return (
    <Layout>
      <CEO
        title="Bazar JJ"
        description={""}
        image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
      />
      <Dashboard data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, { params: { active: "true" } })
    data = res.data
  } catch (error) {
    console.log(error)
  }
  return { props: { data } }
}
