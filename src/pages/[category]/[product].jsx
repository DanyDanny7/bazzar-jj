import Layout from "@/components/layout";// Importa el componente Layout desde la carpeta de componentes
import Product from "@/components/product";// Importa el componente Product desde la carpeta de componentes
import axios from "axios";// Importa la biblioteca axios para realizar solicitudes HTTP
import CEO from "@/components/util/CEO";// Importa el componente CEO desde la carpeta de utilidades
import get from "lodash/get";// Importa la función get de lodash para acceder a propiedades de objetos

// Define el componente Producto que recibe `data` como prop
export default function Producto({ data }) {
  return (
        // Envuelve el contenido dentro del Layout
    <Layout>
      {/* Renderiza el componente CEO con los datos del producto */}
      <CEO title={get(data, "name", "")} description={get(data, "description", "")} image={get(data, "images[0].imageSrc", "")} />
      <Product product={data} />
    </Layout>
  );
}

// Función asíncrona que se ejecuta en el servidor antes de renderizar la página
export async function getServerSideProps(ctx) {
  // Obtiene el slug del producto de la consulta
  const slug = ctx.query.product;
  let data = {}
  try {
    // Realiza una solicitud a la API para obtener los datos del producto
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`)
    data = res.data// Asigna los datos obtenidos a la variable data
  } catch (error) {
     // Manejo de errores (vacío en este caso)
  }
 // Retorna los datos como props para el componente
  return { props: { data } }
}