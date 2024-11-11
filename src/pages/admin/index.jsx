import React, { useEffect, useState } from 'react';
import Layout from "@/components/layout";
import { XCircleIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import map from "lodash/map";

const routes = [
    {
        name: "Categorías",
        slug: "categorias",
        path: "/admin/categorias"
    },
    {
        name: "Productos",
        slug: "productos",
        path: "/admin/productos"
    },
]

const USER = "Dany";
const PASS = "123";

const Admin = () => {
    const [access, setAccess] = useState(true);

    const login = () => {
        try {
            // Solicita usuario
            var user = prompt("Usuario:", "");
            if (user == null || user == "") {
            } else {
                // Solicita Contraseña
                var pass = prompt("Contraseña:", "");
                if (user === USER && pass === PASS) setAccess(true)
                else { }
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        // login()
    }, [])

    return (
        <Layout>
            {access
                ? (
                    <div className='grid grid-cols-4 gap-4 py-10'>
                        {map(routes, ({ slug, name, path }) => (
                            <Link key={slug} href={path} className='col-span-1 border py-6 px-4 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white duration-300'>
                                <div className='text-xl font-semibold text-center' >
                                    {name}
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="rounded-md bg-red-50 p-4">
                            <div className="flex">
                                <div className="shrink-0">
                                    <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">No tienes acceso para visualizar este contenido</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center justify-center'>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="/"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Ir al inicio
                                </Link>
                            </div>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 border border-gray-200"
                                    onClick={login}
                                >
                                    Reintentar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }


        </Layout >
    )
}

export default Admin