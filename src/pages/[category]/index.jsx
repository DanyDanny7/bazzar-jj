import Layout from "@/components/layout";
import Category from "@/components/category";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import CEO from "@/components/util/CEO";
import get from "lodash/get";

export default function Categoria({ data }) {
  return (
    <Layout>
      <CEO title={get(data, "nombre", "")} description={""} image={get(data, "imagen", "")} />
      <Category data={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const slug = ctx.query.category;
  let data = {}
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, {
      params: { slug, active: "true" }
    })
    data = res.data

    if (isEmpty(data)) {
      return {
        redirect: {
          permanent: false,
          destination: `/404?from=${ctx.resolvedUrl}`,
        },
        props: {},
      };
    }
  } catch (error) {

  }
  return { props: { data } }
}