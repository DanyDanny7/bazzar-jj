'use client'// Indica que este componente se ejecuta en el lado del cliente

// Importa el proveedor de sesión de Next Auth
import { SessionProvider } from "next-auth/react";
// Importa React
import React from 'react'

// Define el componente Session que recibe `children` como prop
const Session = ({ children }) => {
    return (
        // Envuelve los hijos dentro del SessionProvider para proporcionar el contexto de la sesión
        <SessionProvider>{children}</SessionProvider>
    )
}
// Exporta el componente Session como el valor por defecto
export default Session;