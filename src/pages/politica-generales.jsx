import React from 'react'
import Layout from "@/components/layout";
import PoliticasGenerales from "@/components/layout/components/PoliticasGenerales"
import CEO from "@/components/util/CEO";

const PoliticaDevolucion = () => {
  return (
    <Layout>
      <CEO
        title="Políticas Generales"
        description={""}
        image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
      />
      <PoliticasGenerales />
    </Layout>
  )
}

export default PoliticaDevolucion
