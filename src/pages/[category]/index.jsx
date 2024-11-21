// Importa el componente Layout desde la carpeta de componentes
import Layout from "@/components/layout";// Importa el componente Category desde la carpeta de componentes
import Category from "@/components/category";// Importa la biblioteca axios para realizar solicitudes HTTP
import axios from "axios";// Importa la función isEmpty de lodash para verificar si un objeto está vacío
import isEmpty from "lodash/isEmpty";// Importa el componente CEO desde la carpeta de utilidades
import CEO from "@/components/util/CEO";// Importa la función get de lodash para acceder a propiedades de objetos

// Define el componente Categoria que recibe `data` como prop
const Categoria = ({ data }) => {
  return (
     // Envuelve el contenido dentro del Layout
    <Layout>
      {/* Renderiza el componente CEO con los datos de la categoría */}
      <CEO title={get(data, "nombre", "")} description={""} image={get(data, "imagen", "")} />
       {/* Renderiza el componente Category pasando los datos de la categoría */}
      <Category data={data} />
    </Layout>
  );
}

// Función asíncrona que se ejecuta en el servidor antes de renderizar la página
export async function getServerSideProps(ctx) {
  // Obtiene el slug de la categoría de la consulta
  const slug = ctx.query.category;
  let data = {}
  try {
    // Realiza una solicitud a la API para obtener los datos de la categoría
    const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${slug}`, {
      params: { active: "true" }// Envía un parámetro para filtrar categorías activas
    })
    data = res.data// Asigna los datos obtenidos a la variable data

    // Verifica si los datos están vacíos
    if (isEmpty(data)) {
      return {
        // Redirige a una página 404 si no se encuentra la categoría
        redirect: {
          permanent: false,
          destination: `/404?from=${ctx.resolvedUrl}`,// Redirige a la URL de error
        },
        props: {},
      };
    }
  } catch (error) {
// Manejo de errores (vacío en este caso)
  }
  // Retorna los datos como props para el componente
  return { props: { data } }
}
// Exporta el componente Categoria como el valor por defecto
export default Categoria;