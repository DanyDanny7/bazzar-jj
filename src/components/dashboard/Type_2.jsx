"use client" // Indica que este componente se ejecuta en el cliente
// Importación de funciones necesarias de lodash y Next.js
import get from "lodash/get";// Importa la función get de lodash para acceder a propiedades de objetos de forma segura
import map from "lodash/map";// Importa la función map de lodash para iterar sobre arreglos
import slice from "lodash/slice";// Importa la función slice de lodash para obtener una porción de un arreglo
import Link from "next/link";// Importa el componente Link de Next.js para la navegación entre páginas

// Componente principal que recibe 'category' como prop
export default function Type_2({ category }) {
    return (
        <div className="bg-white">{/* Contenedor principal con fondo blanco */}
            <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">{/* Contenedor centrado con márgenes y padding */}
                <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">{/* Contenedor para el encabezado */}
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{get(category, "nombre")}</h2>{/* Título de la categoría, se obtiene de 'category' */}
                    {/* Enlace para ver todos los productos de la categoría */}
                    <Link href={`/${get(category, "slug")}`} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Ver todos los productos
                        <span aria-hidden="true"> &rarr;</span>{/* Flecha indicando que es un enlace */}
                    </Link>
                </div>

        {/* Contenedor para los productos de la categoría */}
                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="relative box-content h-80 overflow-x-auto py-4 xl:overflow-visible">{/* Contenedor para el desplazamiento horizontal de productos */}
                            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">{/* Contenedor para los productos */}
                                {map(slice(get(category, "products", []), 0, 5), (product) => (// Obtiene los primeros 5 productos de la categoría y los itera
                                    <Link
                                        key={get(product, "name")}// Clave única para cada producto
                                        href={`/${get(category, "slug")}/${get(product, "slug")}`}// Enlace a la página del producto
                                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"// Estilos para el contenedor del producto
                                    >
                                        <span aria-hidden="true" className="absolute inset-0">{/* Contenedor para la imagen del producto */}
                                            <img alt="" src={get(product, "imageSrc")} className="h-full w-full object-cover object-center" />{/* Imagen del producto */}
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"// Degradado sobre la imagen
                                        />
                                        <span className="relative mt-auto text-center text-xl font-bold text-white">{get(product, "name")}</span>{/* Nombre del producto */}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
