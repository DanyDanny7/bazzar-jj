import React from 'react'
// Componente de lista que muestra un título, un icono y una lista de elementos
const List = ({ tittle, icon, items }) => {
    return (
        <div>
            <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">{icon}<span className='pl-2'>{tittle}</span></h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                {items}
            </address>
        </div >
    )
}
// Exporta el componente List para su uso en otros componentes
export default List
