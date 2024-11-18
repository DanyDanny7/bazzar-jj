'use client'
import React from 'react';
import Button from "@/components/util/Button";
import { signIn } from "next-auth/react";

const LoginComponent = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: e.target["email"].value,
            password: e.target["password"].value
        }
        const resp = await signIn('credentials', body)
        console.log(resp)
    }

    return (
        <div className='flex justify-center '>
            <form className='border shadow py-6 px-10' onSubmit={onSubmit}>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                        Correo
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                        />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 sm:pt-1.5">
                        Contraseña
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                        />
                    </div>
                </div>
                <Button type="submit" variant='contained' className="mt-6">
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    )
}

export default LoginComponent