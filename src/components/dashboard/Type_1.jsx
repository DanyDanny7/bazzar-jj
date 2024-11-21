"use client"// Indica que este componente se ejecuta en el cliente

// Importación de funciones necesarias de lodash y Next.js
import get from "lodash/get"; // Importa la función get de lodash para acceder a propiedades de objetos de forma segura
import map from "lodash/map";// Importa la función map de lodash para iterar sobre arreglos
import slice from "lodash/slice";// Importa la función slice de lodash para obtener una porción de un arreglo
import Link from "next/link";// Importa el componente Link de Next.js para la navegación entre páginas

// Componente principal que recibe 'category' como prop
export default function Type_1({ category }) {
    return (
        <div className="bg-gray-100">{/* Contenedor principal con fondo gris claro */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Contenedor centrado con márgenes y padding */}
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-14">{/* Contenedor para el contenido de la categoría */}
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">{/* Contenedor para el encabezado */}
                        <h2 className="text-2xl font-bold text-gray-900">{get(category, "nombre")}</h2>{/* Título de la categoría, se obtiene de 'category' */}
                        {/* Enlace para ver todos los productos de la categoría */}
                        <Link href={`/${get(category, "slug")}`} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Ver todos los productos
                            <span aria-hidden="true"> &rarr;</span>{/* Flecha indicando que es un enlace */}
                        </Link>
                    </div>

                    {/* Contenedor para los productos de la categoría */}
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {map(slice(get(category, "products", []), 0, 3), (product) => (// Obtiene los primeros 3 productos de la categoría y los itera
                            <div key={get(product, "name", "")} className="group relative">{/* Contenedor para cada producto */}
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={get(product, "imageAlt", "")}// Texto alternativo de la imagen
                                        src={get(product, "imageSrc", "")}// Fuente de la imagen
                                        className="h-full w-full object-cover object-center"// Clases de estilo para la imagen
                                    />
                                </div>
                                <h3 className="mt-2 text-sm text-gray-500">{/* Contenedor para el nombre del producto */}
                                    <Link href={`/${get(category, "slug")}/${get(product, "slug", "")}`}>{/* Enlace a la página del producto */}
                                        <>
                                            <span className="absolute inset-0" />{/* Espacio para el área clickeable */}
                                            <div className="text-lg text-black font-semibold">{get(product, "name", "")}</div>{/* Nombre del producto */}
                                        </>
                                    </Link>
                                </h3>
                                {/* Descripción del producto, se usa dangerouslySetInnerHTML para permitir HTML en la descripción */}
                                <p className="text-base text-gray-600 line-clamp-3 leading-[1.2]" dangerouslySetInnerHTML={{ __html: get(product, "description", "") }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
