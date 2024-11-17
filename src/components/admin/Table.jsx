import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Empty from "@/components/util/Empty";
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

const Table = ({ loading, onEdit, onDelete, showProducts, categories, onAdd, addNewProducts }) => {
    return (
        <div className="mt-8 flow-root">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Foto
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Slug
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Tipo
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Activo
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Productos
                            </th>
                            <th scope="col" className="relative py-3.5">
                                <span className="sr-only">Opciones</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {categories.map((category) => (
                            <tr key={category._id} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                    <img src={category.imagen} className="h-10 w-10 rounded-full object-cover" />
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "slug", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "nombre", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "type", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "active", "false") === "true" ? "Si" : "No"}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(category, "products.length", "")}</td>
                                <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium flex gap-4">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <MenuButton className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                <span className="sr-only">Open options</span>
                                                <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <button
                                                        onClick={onEdit(category)}
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Editar categoría<span className="sr-only">, {category.name}</span>
                                                    </button>
                                                </MenuItem>
                                                <MenuItem>
                                                    <button
                                                        onClick={addNewProducts(category)}
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Añadir productos<span className="sr-only">, {category.name}</span>
                                                    </button>
                                                </MenuItem>
                                                {!!get(category, "products.length", 0) &&
                                                    <MenuItem>
                                                        <button
                                                            onClick={showProducts(category)}
                                                            type="button"
                                                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                        >
                                                            Ver productos<span className="sr-only">, {category.name}</span>
                                                        </button>
                                                    </MenuItem>
                                                }
                                                <MenuItem>
                                                    <button
                                                        onClick={onDelete(category)}
                                                        type="button"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Borrar categoría<span className="sr-only">, {category.name}</span>
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
                {isEmpty(categories) &&
                    <Empty
                        title="No hay categorías"
                        description="Debes agregar categoría para poder visualizarlos"
                        onClick={onAdd}
                        btnName="Agregar producto"
                        loading={loading}
                    />
                }
            </div>
        </div>
    )
}

export default Table