'use client'

import { Transition } from '@headlessui/react'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

const Notification = ({ text, open, setClose }) => (
    <>
        <div
            aria-live="assertive"
            className="pointer-events-none fixed z-[100] inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition show={open}>
                    <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="shrink-0 pt-1">
                                    <BuildingStorefrontIcon aria-hidden="true" className="size-6 text-green-400" />
                                </div>
                                <div className="ml-3 w-0 flex-1">
                                    <p className="mt-1 text-sm text-gray-500">{text}</p>
                                </div>
                                <div className="ml-4 flex shrink-0">
                                    <button
                                        type="button"
                                        onClick={setClose}
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon aria-hidden="true" className="size-5" />
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

export default Notification;