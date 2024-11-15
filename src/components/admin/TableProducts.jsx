import React from 'react';
import Button from "@/components/util/Button";
import Empty from "@/components/util/Empty";
import map from "lodash/map";
import join from "lodash/join";
import isEmpty from "lodash/isEmpty";

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Table = ({ onEdit, onDelete, onDetail, products }) => {
    return (
        <div className="mt-8 flow-root w-full max-h-96 overflow-y-auto relative">
            <div className="inline-block min-w-full py-2 align-middle w-full">
                <div className="text-left">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className="min-w-full border-separate border-spacing-0">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                            >
                                                Slug
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Nombre
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Código
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Precio
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Colores
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                            >
                                                Descripción
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, i) => (
                                            <tr key={i}>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                                    )}
                                                >
                                                    {product.slug}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                    )}
                                                >
                                                    {product.name}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                    )}
                                                >
                                                    {product.code}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                    )}
                                                >
                                                    {product.price}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                    )}
                                                >
                                                    {join(map(product.colors, ({ name }) => name), ", ")}
                                                </td>
                                                <td
                                                    className={classNames(
                                                        i !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                        'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                    )}
                                                >
                                                    {product.description}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {isEmpty(products) &&
                    <Empty
                        title="No hay productos"
                        description="Debes agregar productos para poder visualizarlos"
                        onClick={() => { }}
                        btnName="Agregar producto"
                    />
                }
            </div>
        </div>
    )
}

export default Table