'use client'
// Importa los componentes necesarios de la biblioteca Headless UI
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

// Define el componente Modal que recibe propiedades: open, setOpen, children y title
const Modal = ({ open, setOpen, children, title }) => (
    // El componente Dialog maneja la visibilidad del modal
    <Dialog open={open} onClose={setOpen} className="relative z-10">

        {/* 
            DialogBackdrop es la capa de fondo que oscurece el contenido detrás del modal.
            Se aplican transiciones para suavizar la aparición y desaparición.
        */}
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto px-4">
            {/* 
                Estructura de flexbox para centrar el contenido del modal.
                Se asegura que el modal esté siempre visible en la pantalla.
            */}

            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                {/* 
                    DialogPanel es el contenedor principal del contenido del modal.
                    Se aplican estilos y transiciones para el efecto visual.
                */}
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-7xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className=''>
                        <div className="mt-3 text-center sm:mt-5">

                            {/* 
                                DialogTitle muestra el título del modal.
                                Se utiliza un encabezado h3 con estilos específicos.
                            */}
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                {title}

                            </DialogTitle>
                            <div className="mt-2">
                                {/* 
                                    Aquí se renderizan los hijos del componente Modal,
                                    permitiendo personalizar el contenido del modal.
                                */}
                                {children}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
)

// Exporta el componente Modal para que pueda ser utilizado en otros archivos
export default Modal;