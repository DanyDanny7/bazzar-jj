"use client"

import get from "lodash/get";
import map from "lodash/map";
import slice from "lodash/slice";
import Link from "next/link";

export default function Type_1({ category }) {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-14">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2 className="text-2xl font-bold text-gray-900">{get(category, "nombre")}</h2>
                        <Link href={`/${get(category, "slug")}`} className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Ver todos los productos
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {map(slice(get(category, "products", []), 0, 3), (product) => (
                            <div key={get(product, "name", "")} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={get(product, "imageAlt", "")}
                                        src={get(product, "imageSrc", "")}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm text-gray-500">
                                    <Link href={`/${get(category, "slug")}/${get(product, "slug", "")}`}>
                                        <>
                                            <span className="absolute inset-0" />
                                            <div className="text-lg text-black font-semibold">{get(product, "name", "")}</div>
                                        </>
                                    </Link>
                                </h3>
                                <p className="text-base text-gray-600 line-clamp-3 leading-[1.2]" dangerouslySetInnerHTML={{ __html: get(product, "description", "") }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
