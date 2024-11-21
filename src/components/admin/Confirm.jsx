'use client'// Indica que este componente es un componente de cliente en un entorno de React

// Importación de componentes necesarios de la biblioteca Headless UI y Heroicons
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Button from "@/components/util/Button";  // Importación de un componente de botón personalizado
import get from "lodash/get";                   // Importación de la función 'get' de lodash para acceder a propiedades de objetos de forma segura

// Definición del componente Confirm que recibe varias props
const Confirm = ({ open, toDelete, onConfirm, onCancel, loading }) => {
    return (

        // Componente Dialog que se muestra si 'open' es verdadero
        <Dialog open={open} onClose={onCancel} className="relative z-10">

            {/* Fondo del diálogo con efecto de opacidad */}
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

                {/* Contenedor del panel del diálogo */}
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    {/* Panel del diálogo que contiene el contenido principal */}
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="sm:flex sm:items-start">

                            {/* Icono de advertencia */}
                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">

                                 {/* Título del diálogo que pregunta al usuario si desea eliminar la categoría */}
                                <DialogTitle as="h3" className="text-base font-normal text-gray-900">
                                    <span>¿Desea eliminar categoría<strong className='pl-2'>{get(toDelete, "nombre", "")}</strong>?</span>
                                </DialogTitle>
                                <div className="mt-2">

                                    {/* Mensaje informativo sobre la eliminación */}
                                    <p className="text-sm text-gray-500">
                                        Al eliminar la categoría<strong className='px-2'>{get(toDelete, "nombre", "")}</strong>se eliminarán<strong className='px-1'>{get(toDelete, "products.length")}</strong>productos asociados.
                                    </p>
                                </div>
                            </div>
                        </div>

                         {/* Botones de acción para confirmar o cancelar la eliminación */}
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-4">
                            <Button
                                type="button"
                                onClick={onConfirm}     // Función que se ejecuta al confirmar la eliminación
                                loading={loading}       // Propiedad para mostrar el estado de carga en el botón
                                variant="contained"
                            >
                                Eliminar categoría
                            </Button>
                            <Button
                                type="button"
                                data-autofocus    //Este botón se enfoca automáticamente
                                onClick={onCancel}// Función que se ejecuta al cancelar la eliminación
                            >
                                Cancelar
                            </Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

// Exportación del componente Confirm para su uso en otras partes de la aplicación
export default Confirm;