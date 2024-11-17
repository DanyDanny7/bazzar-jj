import React, { useEffect, useState } from 'react';
import get from "lodash/get";
import map from "lodash/map";
import reject from "lodash/reject";
import Link from "next/link";
import axios from "axios";

const TableProducts = ({ products, toEdit, reload, show = false }) => {
    const [list, setList] = useState(products);
    const [deleteLoad, setDeleteLoad] = useState();
    const [active, setActive] = useState({});

    useEffect(() => {
        setList(products)
        return () => { setActive({}) }
    }, [JSON.stringify(products)])

    const onDelete = (product) => async () => {
        setActive(product)
        setDeleteLoad(true);
        const restanes = reject(list, ({ slug }) => slug === product.slug);
        try {
            const body = {
                products: restanes,
                deleted: product
            }
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/category_products?slug=${toEdit.slug}`, body)
            setList(restanes)
            reload()
        } catch (error) {
            console.log({ error })
        } finally {
            setDeleteLoad(false);
        }
    }

    return (
        <div className="mt-8 flow-root w-full max-h-96 overflow-y-auto relative">
            <div className="inline-block min-w-full py-2 align-middle w-full">
                <table className="min-w-full divide-y divide-gray-300 text-left">
                    <thead>
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Código
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Slug
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Nombre
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Precio
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 w-[300px] max-w-[300px]">
                                Descripción
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {map(list, (product) => (
                            <tr key={get(product, "slug")} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{get(product, "code", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(product, "slug", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(product, "name", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(product, "price", "")}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-[300px] max-w-[300px] truncate">{get(product, "description", "")}</td>
                                {show &&
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className='flex gap-4 justify-center items-center'>
                                            <Link href={`/${get(toEdit, "slug")}/${get(product, "slug", "")}`} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </Link>
                                            <div className='w-7' role="button" onClick={onDelete(product)}>
                                                {deleteLoad && active.slug === product.slug
                                                    ? <svg className="animate-spin -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                }

                                            </div>
                                        </div>
                                    </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableProducts