import React, { useEffect } from 'react';// Importa React y el hook useEffect desde React
import Layout from "@/components/layout";// Importa el componente Layout desde la carpeta de componentes
import { useSession } from "next-auth/react";// Importa el hook useSession de next-auth para gestionar la sesión del usuario
import AdminComponent from "@/components/admin";// Importa el componente AdminComponent desde la carpeta de componentes
import { useRouter } from "next/router";// Importa el hook useRouter de next/router para manejar la navegación

// Define el componente Admin
const Admin = () => {
    // Inicializa el router
    const router = useRouter();
    // Obtiene el estado de la sesión (autenticado, cargando, no autenticado)
    const { status } = useSession();

    // Efecto que se ejecuta al cambiar el estado de la sesión
    useEffect(() => {
        // Si el usuario no está autenticado y no está cargando, redirige a la página de login
        if (!(status === "authenticated" || status === "loading")) router.push("/login");
    }, [status]) // Dependencia del efecto: se ejecuta cuando cambia el estado

    return (
        // Envuelve el contenido dentro del Layout
        <Layout>
            {/* Renderiza el componente AdminComponent */}
            <AdminComponent />
        </Layout>
    )
}

// Exporta el componente Admin como el valor por defecto
export default Admin;