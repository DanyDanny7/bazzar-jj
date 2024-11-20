// Importación de componentes y funciones necesarias
import Link from "next/link";// Importa el componente Link de Next.js para la navegación entre páginas
import { useRouter } from 'next/router';// Importa el hook useRouter para acceder a la información de la ruta actual
import get from "lodash/get";// Importa la función get de lodash para acceder a propiedades de objetos de forma segura
import map from "lodash/map";// Importa la función map de lodash para iterar sobre arreglos

// Componente principal que recibe 'data' como prop
export default function Category({ data }) {
    // Inicializa el hook useRouter para acceder a la información de la ruta
    const router = useRouter()
    // Extrae la categoría de la consulta de la URL
    const { category } = router.query;

        // Renderiza el componente
    return (
        <div className="bg-gray-100">{/* Contenedor principal con fondo gris claro */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Contenedor centrado con márgenes y padding */}
                <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">{/* Contenedor para el contenido de la categoría */}
                    <h2 className="text-2xl font-bold text-gray-900">{get(data, "nombre", "")}</h2>{/* Título de la categoría, se obtiene de 'data' */}
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-y-0 lg:gap-y-8">{/* Contenedor para los productos */}
                        {map(get(data, "products", []), (product) => (// Itera sobre los productos obtenidos de 'data'
                            <div key={get(product, "name", "")} className="group relative">{/* Contenedor para cada producto */}
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">{/* Imagen del producto */}
                                    <img
                                        alt={get(product, "imageAlt", "")}// Texto alternativo de la imagen
                                        src={get(product, "imageSrc", "")}// Fuente de la imagen
                                        className="h-full w-full object-cover object-center"// Clases de estilo para la imagen
                                    />
                                </div>
                                <h3 className="mt-2 text-sm text-gray-500">{/* Contenedor para el nombre del producto */}
                                    <Link href={`${category}/${get(product, "slug", "")}`}>{/* Enlace a la página del producto */}
                                    <span className="absolute inset-0" /> {/* Espacio para el área clickeable */}
                                    <div className="text-lg text-black font-semibold">{get(product, "name", "")}</div>{/* Nombre del producto */}
                                    </Link>
                                </h3>
                                <p className="text-base text-gray-600 line-clamp-3 leading-[1.2]" dangerouslySetInnerHTML={{ __html: get(product, "description", "") }} />{/* Descripción del producto */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
