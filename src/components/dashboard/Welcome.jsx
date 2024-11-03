'use client'
import get from "lodash/get";

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useRouter } from 'next/router'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Welcome({ product, category }) {
    const router = useRouter()
    const [open, setOpen] = useState(true);

    const features = [
        {
            name: get(product, "name"),
            description: get(product, "description"),
            imageSrc: get(product, "imageSrc"),
            imageAlt: get(product, "imageAlt"),
        },
    ]


    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div>
                            <div className="text-center">
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                                        <div className="mx-auto max-w-3xl text-center">
                                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro producto más reciente</h2>
                                            <p className="mt-4 text-gray-500">
                                                Este es el producto más reciente de nuestro catálogo
                                            </p>
                                        </div>

                                        <div className="mt-8 space-y-16">
                                            {features.map((feature, featureIdx) => (
                                                <div
                                                    key={feature.name}
                                                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                                >
                                                    <div
                                                        className={classNames(
                                                            featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                                            'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
                                                        )}
                                                    >
                                                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                        <p className="mt-2 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: feature.description }} />
                                                    </div>
                                                    <div
                                                        className={classNames(
                                                            featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                                            'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
                                                        )}
                                                    >
                                                        <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                                            <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 sm:mt-3 flex gap-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={() => router.push(`/${get(category, "slug")}/${get(product, "slug")}`)}
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ver producto
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
