"use client"// Indica que este componente debe ser renderizado en el lado del cliente

import get from "lodash/get";// Importa la función 'get' de lodash para acceder a propiedades anidadas de manera segura
import Link from "next/link";// Importa el componente 'Link' de Next.js para la navegación entre páginas

// Componente funcional 'Type_3' que recibe una prop 'category'
export default function Type_3({ category }) {
    return (
        <div className="bg-white">{/* Contenedor principal con fondo blanco */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">{/* Contenedor con márgenes y tamaño máximo */}
                <div className="relative overflow-hidden rounded-lg lg:h-96">{/* Contenedor relativo para manejar el posicionamiento de los elementos internos */}
                    <div className="absolute inset-0">{/* Contenedor absoluto que ocupa todo el espacio del padre */}
                        <img
                            alt=""// Texto alternativo vacío para la imagen
                            src={get(category, "imagen")}// Obtiene la URL de la imagen de la categoría
                            className="h-full w-full object-cover object-center"// Estilos para que la imagen cubra el contenedor
                        />
                    </div>
                    <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />{/* Espacio reservado para pantallas grandes */}
                    <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />{/* Espacio reservado para pantallas grandes */}
                    <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                        <div>
                            <h2 className="text-xl font-bold text-white">{get(category, "nombre")}</h2>{/* Título de la categoría */}
                            <p className="mt-1 text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: get(category, "description") }}></p>{/* Descripción de la categoría, permitiendo HTML */}
                        </div>
                        <Link
                            href={`/${get(category, "slug")}`}// Enlace a la página de la categoría usando el slug
                            className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                        >
                            {`Ver todos los productos de ${get(category, "nombre")}`}{/* Texto del enlace */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
