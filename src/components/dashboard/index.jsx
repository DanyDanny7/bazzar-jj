// Importación de funciones y componentes necesarios de lodash y Next.js
import last from "lodash/last";// Importa la función last de lodash para obtener el último elemento de un arreglo
import get from "lodash/get";// Importa la función get de lodash para acceder a propiedades de objetos de forma segura
import map from "lodash/map";// Importa la función map de lodash para iterar sobre arreglos
import toString from "lodash/toString";// Importa la función toString de lodash para convertir valores a cadena
import dynamic from 'next/dynamic';// Importa la función dynamic de Next.js para la carga dinámica de componentes

// Carga dinámica de componentes con renderizado del lado del cliente deshabilitado
const ShopByCategory = dynamic(() => import('./ShopByCategory'), { ssr: false });
const Type_1 = dynamic(() => import('./Type_1'), { ssr: false });
const Type_2 = dynamic(() => import('./Type_2'), { ssr: false });
const Type_3 = dynamic(() => import('./Type_3'), { ssr: false });
const Welcome = dynamic(() => import('./Welcome'), { ssr: false });

// Componente principal del Dashboard que recibe 'data' como prop
const Dashboard = ({ data }) => (
    <div id="contenido" className="bg-white">{/* Contenedor principal con fondo blanco */}
        <div aria-hidden="true" className="relative">{/* Contenedor para la imagen de fondo */}
            <img
                alt=""// Texto alternativo vacío ya que es solo una imagen decorativa
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-02-full-width.jpg"// URL de la imagen de fondo
                className="h-96 w-full object-cover object-center"// Clases de estilo para la imagen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white" />{/* Capa de degradado sobre la imagen */}
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">{/* Contenedor para el contenido del dashboard */}
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">{/* Contenedor centrado para el título y la descripción */}
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bazar Fashion JJ</h2>{/* Título del dashboard */}
                <p className="mt-4 text-gray-500">{/* Descripción del negocio */}
                    ¡Bienvenido a Bazar Fashion JJ! Descubre una amplia selección de ropa y zapatos para cualquier ocasión.
                     Desde las últimas tendencias hasta los clásicos atemporales, encontrarás todo lo que necesitas para expresar
                      tu estilo.<br/> <strong>¡Compra ahora y disfruta de envío gratis en pedidos superiores a $50.00!</strong>
                </p>
            </div>
            <ShopByCategory categories={data} />{/* Componente que muestra categorías de productos */}

            {/* Itera sobre las categorías y renderiza el componente correspondiente según su tipo */}
            {map(data, (category) => {
                switch (toString(get(category, "type", 0))) {
                    case "Tarjeta": return <Type_1 category={category} />;
                    case "Carrusel": return <Type_2 category={category} />;
                    case "Banner": return <Type_3 category={category} />;
                    default: return <Type_1 category={category} />;
                }
            })}
        </div>
        {/* Componente Welcome que muestra información sobre el último producto de la última categoría */}
        <Welcome product={last(get(last(data), "products"))} category={last(data)} />
    </div>
)

// Exporta el componente Dashboard como el valor por defecto
export default Dashboard;