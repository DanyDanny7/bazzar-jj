import React from 'react'

// Componente de encabezado que muestra un título y una descripción
const Head = ({description, tittle}) => {
    return (
        <div className="mx-auto max-w-4xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{tittle}</h2>
            <p className="mt-4 text-lg/8 text-gray-650">
                {description}
            </p>
        </div>
    )
}
// Exporta el componente Head para su uso en otros componentes
export default Head
