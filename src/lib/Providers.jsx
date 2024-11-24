'use client'// Indica que este componente se ejecuta en el lado del cliente
// Importa React
import React from 'react';
// Importa el proveedor de sesión de Next Auth
import { SessionProvider } from "next-auth/react";
import ShoppingCartProvider from "@/components/layout/ShoppingCard/ContextShoppingCart"

// Define el componente Session que recibe `children` como prop
const Providers = ({ children }) => {
    return (
        // Envuelve los hijos dentro del SessionProvider para proporcionar el contexto de la sesión
        <SessionProvider>
            <ShoppingCartProvider>
                {children}
            </ShoppingCartProvider>
        </SessionProvider>
    )
}
// Exporta el componente Session como el valor por defecto
export default Providers;