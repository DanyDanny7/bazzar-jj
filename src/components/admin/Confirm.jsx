'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Button from "@/components/util/Button";
import get from "lodash/get";

const Confirm = ({ open, toDelete, onConfirm, onCancel, loading }) => {
    return (
        <Dialog open={open} onClose={onCancel} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-normal text-gray-900">
                                    <span>¿Desea eliminar categoría<strong className='pl-2'>{get(toDelete, "nombre", "")}</strong>?</span>
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Al eliminar la categoría<strong className='px-2'>{get(toDelete, "nombre", "")}</strong>se eliminarán<strong className='px-1'>{get(toDelete, "products.length")}</strong>productos asociados.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-4">
                            <Button
                                type="button"
                                onClick={onConfirm}
                                loading={loading}
                                variant="contained"
                            >
                                Eliminar categoría <strong className='pl-2'>{get(toDelete, "nombre", "")}</strong>
                            </Button>
                            <Button
                                type="button"
                                data-autofocus
                                onClick={onCancel}
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
export default Confirm;