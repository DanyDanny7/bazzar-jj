'use client'// Indica que este componente se ejecuta en el lado del cliente
import get from "lodash/get";// Importa la función get de lodash para acceder a propiedades de objetos
import Button from "@/components/util/Button"// Importa el componente Button desde la carpeta de utilidades

import { useState } from 'react'// Importa el hook useState de React para manejar el estado local
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';// Importa componentes de Headless UI para crear un diálogo modal
import { useRouter } from 'next/router'// Importa el hook useRouter de next/router para manejar la navegación

// Define el componente Welcome que recibe `product` y `category` como props
export default function Welcome({ product, category }) {
    // Inicializa el router para la navegación
    const router = useRouter()
    // Estado que determina si el diálogo está abierto
    const [open, setOpen] = useState(true);
// Define las características del producto utilizando lodash para acceder a las propiedades
    const features = [
        {
            name: get(product, "name"),// Nombre del producto
            description: get(product, "description"),// Descripción del producto
            imageSrc: get(product, "imageSrc"),// Fuente de la imagen del producto
            imageAlt: get(product, "imageAlt"),// Texto alternativo de la imagen
        },
    ]

    return (// Renderiza el diálogo modal, controlando si está abierto
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            {/* Fondo del diálogo con opacidad */}
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-2">
                    {/* Panel del diálogo que contiene el contenido */}
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-1 md:px-4 pb-1 md:pb-4 pt-2 md:pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div>
                            <div className="text-center">
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-2 py-2 md:py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                                        <div className="mx-auto max-w-3xl text-center">
                                            {/* Título del producto */}
                                            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro producto más reciente</h2>
                                            {/* Descripción del producto */}
                                            <p className="mt-1 md:mt-4 text-gray-500 leading-[1.2]">
                                                Este es el producto más reciente de nuestro catálogo
                                            </p>
                                        </div>

                                        <div className="mt-2 md:mt-8 space-y-4 md:space-y-16">
                                            {/* Mapea las características del producto y las renderiza */}
                                            {features.map((feature) => (
                                                <div
                                                    key={feature.name}
                                                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                                                >
                                                    <div className={"mt-2 md:mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-6"}>
                                                        {/* Nombre de la característica */}
                                                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                        {/* Descripción de la característica, se permite HTML */}
                                                        <p className="mt-1 md:mt-2 text-sm text-gray-500 leading-[1.2]" dangerouslySetInnerHTML={{ __html: feature.description }} />
                                                    </div>
                                                    <div
                                                        className={"flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-6 px-4"}
                                                    >
                                                        {/* Imagen de la característica */}
                                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
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
                        {/* Botones de acción */}
                        <div className="mt-2 sm:mt-3 flex gap-2">
                            {/* Botón para cancelar */}
                            <Button
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                Cancelar
                            </Button>
                            {/* Botón para ver el producto */}
                            <Button

                                type="button"
                                onClick={() => router.push(`/${get(category, "slug")}/${get(product, "slug")}`)}
                                variant="contained"
                            >
                                Ver producto
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
