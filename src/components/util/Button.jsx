import React from 'react'

// Componente React para un botón personalizable
const Button = ({ children, loading, className, type = "button", onClick = () => { }, variant = "default" }) => {

// Definición de las clases CSS para las distintas variantes del botón
    const variants = {
        default: 'flex justify-center items-center w-full border border-gray-200 px-3 py-2 rounded-md text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:bg-gray-300 duration-300',
        contained: 'flex justify-center items-center w-full rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 duration-300',
        transparent: 'flex justify-center items-center w-full px-3 py-2 rounded-md text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:bg-gray-300 duration-300',
    };

     // Renderizado del botón
    return (
        <button type={type} className={`${className} ${variants[variant]}`} onClick={onClick} >
            {loading &&
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            }
            {children}
        </button>
    )
}

// Exporta el componente para su uso en otros archivos
export default Button