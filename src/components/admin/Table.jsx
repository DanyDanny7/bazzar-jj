import React from 'react';
import Button from "@/components/util/Button";
import Empty from "@/components/util/Empty";
import isEmpty from 'lodash/isEmpty';

const Table = ({ onEdit, onDelete, onDetail, categories, onAdd }) => {
    return (
        <div className="mt-8 flow-root">
            <div className="overflow-x-auto">
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
                                <th scope="col" className="relative py-3.5 w-[300px]">
                                    <span className="sr-only">Opciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            {categories.map((category) => (
                                <tr key={category._id} className="even:bg-gray-50">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                        <img src={category.imagen} className="h-10 w-10 rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.slug}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.nombre}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.type}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.active === "true" ? "Si" : "No"}</td>
                                    <td className="relative whitespace-nowrap py-4 text-right text-sm font-medium flex gap-4 w-[300px]">
                                        <Button btnClass="text-green-600 hover:text-green-900 border border-green-300 py-1" onClick={onEdit(category)}>
                                            Edit<span className="sr-only">, {category.name}</span>
                                        </Button>
                                        <Button btnClass="text-indigo-600 hover:text-indigo-900 border border-indigo-300 py-1" onClick={onDetail(category)}>
                                            Productos<span className="sr-only">, {category.name}</span>
                                        </Button>
                                        <Button btnClass="text-red-600 hover:text-red-900 border border-gray-300 py-1" onClick={onDelete(category)}>
                                            Borrar<span className="sr-only">, {category.name}</span>
                                        </Button>
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
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Table