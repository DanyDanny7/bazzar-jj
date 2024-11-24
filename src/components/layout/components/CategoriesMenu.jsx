'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import map from "lodash/map";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default ({ open, setOpen, menu, active }) => {

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                        >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 shadow-xl">
                                <div className="px-4 sm:px-6 sticky top-0 bg-white z-10 pt-6 pb-2">
                                    <div className="flex items-start justify-between">
                                        <DialogTitle className="text-lg font-bold text-gray-900">Categorías</DialogTitle>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Cerrar Menu</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div id="menu-drawer" className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div className="lg:inset-y-0 lg:z-50 lg:flex w-full lg:flex-col">
                                        <div className="flex grow flex-col gap-y-3 overflow-y-auto px-2 pb-4">
                                            <nav className="flex flex-1 flex-col">
                                                <ul role="list" className="flex flex-1 flex-col gap-y-4">
                                                    <li>
                                                        <ul role="list" className="-mx-2 space-y-1">
                                                            {map(menu, (item) => (
                                                                <li key={item.slug}>
                                                                    <Link
                                                                        href={`/${item.slug}`}
                                                                        className={classNames(
                                                                            item?.slug === active
                                                                                ? 'text-gray-900 bg-gray-100'
                                                                                : 'text-gray-700 hover:bg-gray-200',
                                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                                        )}
                                                                    >
                                                                        {item.nombre}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div >
        </Dialog >
    )
}
