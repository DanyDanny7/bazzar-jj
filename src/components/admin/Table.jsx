import React from 'react';// Importa React para poder utilizar JSX
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'// Importa componentes del menú de Headless UI
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'// Importa un icono para el botón de opciones
import Empty from "@/components/util/Empty";// Importa un componente para mostrar un estado vacío
import isEmpty from 'lodash/isEmpty';// Importa la función isEmpty de lodash para verificar si una colección está vacía
import get from 'lodash/get';// Importa la función get de lodash para acceder a propiedades de objetos de manera segura

// Componente Table que recibe varias propiedades
const Table = ({ loading, onEdit, onDelete, showProducts, categories, onAdd, addNewProducts }) => {
    return (
        <div className="mt-8 flow-root">{/* Contenedor principal con margen superior */}
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">{/* Contenedor para la tabla */}
                <table className="min-w-full divide-y divide-gray-300">{/* Tabla con estilos */}
                    <thead>
                        <tr>{/* Encabezado de la tabla */}
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Foto{/* Columna para la foto de la categoría */}
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Slug{/* Columna para el slug de la categoría */}
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Nombre{/* Columna para el nombre de la categoría */}
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Tipo{/* Columna para el tipo de la categoría */}
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Activo{/* Columna que indica si la categoría está activa */}
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Productos {/* Columna que muestra la cantidad de productos en la categoría */}
                            </th>
                            <th scope="col" className="relative py-3.5">
                                <span className="sr-only">Opciones</span>{/* Columna para las opciones del menú */}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">{/* Cuerpo de la tabla */}
                        {categories.map((category) => (// Mapea sobre las categorías para generar filas
                            <tr key={category._id} className="even:bg-gray-50">{/* Cada fila tiene un color de fondo alternativo */}
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                    <img src={category.imagen} className="h-10 w-10 rounded-full object-cover" />{/* Muestra la imagen de la categoría */}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "slug", "")}</td>      {/* Muestra el slug */}
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "nombre", "")}</td>    {/* Muestra el nombre */}
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "type", "")}</td>      {/* Muestra el tipo */}
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "active", "false") === "true" ? "Si" : "No"}</td>{/* Indica si está activo */}
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "products.length", "")}</td>{/* Muestra la cantidad de productos */}
                                <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium flex gap-4">
                                    <Menu as="div" className="relative inline-block text-left">{/* Menú para opciones */}
                                        <div>
                                            <MenuButton className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                <span className="sr-only">Open options</span>                   {/* Texto oculto para accesibilidad */}
                                                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />  {/* Icono de opciones */}
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <button
                                                        onClick={onEdit(category)}// Llama a la función onEdit al hacer clic
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Editar categoría<span className="sr-only">, {category.name}</span>{/* Opción para editar */}
                                                    </button>
                                                </MenuItem>
                                                <MenuItem>
                                                    <button
                                                        onClick={addNewProducts(category)}// Llama a la función para añadir productos
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Añadir productos<span className="sr-only">, {category.name}</span>{/* Opción para añadir productos */}
                                                    </button>
                                                </MenuItem>
                                                {!!get(category, "products.length", 0) &&// Verifica si hay productos para mostrar la opción
                                                    <MenuItem>
                                                        <button
                                                            onClick={showProducts(category)} // Llama a la función para mostrar productos
                                                            type="button"
                                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                        >
                                                            Ver productos<span className="sr-only">, {category.name}</span>{/* Opción para ver productos */}
                                                        </button>
                                                    </MenuItem>
                                                }
                                                <MenuItem>
                                                    <button
                                                        onClick={onDelete(category)}// Llama a la función para borrar la categoría
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Borrar categoría<span className="sr-only">, {category.name}</span>{/* Opción para borrar */}
                                                    </button>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isEmpty(categories) &&// Verifica si no hay categorías para mostrar el componente Empty
                    <Empty
                        title="No hay categorías"// Título del estado vacío
                        description="Debes agregar categoría para poder visualizarlos"// Descripción del estado vacío
                        onClick={onAdd}// Llama a la función para agregar una nueva categoría
                        btnName="Agregar producto"// Nombre del botón
                        loading={loading}// Estado de carga
                    />
                }
            </div>
        </div>
    )
}

export default Table// Exporta el componente Table para su uso en otras partes de la aplicación