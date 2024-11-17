'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const Modal = ({ open, setOpen, children, title }) => (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto px-4">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-7xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className=''>
                        <div className="mt-3 text-center sm:mt-5">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                {title}
                            </DialogTitle>
                            <div className="mt-2">
                                {children}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
)

export default Modal;