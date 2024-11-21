'use client'// Indica que este componente debe ser renderizado en el cliente


import { Transition } from '@headlessui/react'// Importa el componente Transition de Headless UI para animaciones
import { XCircleIcon } from '@heroicons/react/24/outline'// Importa el icono de círculo con una X de Heroicons
import { XMarkIcon } from '@heroicons/react/20/solid'// Importa el icono de X de Heroicons

// Componente Notification que recibe props: text, open y setClose
const Notification = ({ text, open, setClose }) => (
    <>
          {/* Contenedor principal de la notificación */}
        <div
            aria-live="assertive"// Indica que el contenido es importante y debe ser anunciado por lectores de pantalla
            className="pointer-events-none fixed z-[100] inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                                {/* Transición que muestra la notificación si 'open' es verdadero */}
                <Transition show={open}>
                    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                     {/* Icono de error */}
                                    <XCircleIcon aria-hidden="true" className="size-6 text-red-400" />
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    {/* Título y mensaje de error */}
                                    <p className="text-sm font-medium text-gray-900">Error</p>
                                    <p className="mt-1 text-sm text-gray-500">{text}</p>
                                </div>
                                <div className="ml-4 flex shrink-0">
                                     {/* Botón para cerrar la notificación */}
                                    <button
                                        type="button"
                                        onClick={setClose}// Llama a la función setClose al hacer clic
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">Close</span>              {/* Texto oculto para accesibilidad */}
                                        <XMarkIcon aria-hidden="true" className="size-5" /> {/* Icono de cerrar */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </>
)

// Exporta el componente Notification para su uso en otras partes de la aplicación
export default Notification;