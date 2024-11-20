import React from 'react';                      // Importa la biblioteca React para poder utilizar componentes de React
import TableProducts from "./TableProducts";    // Importa el componente TableProducts desde el archivo correspondiente
import get from "lodash/get";                   // Importa la función 'get' de lodash para acceder a propiedades de objetos de manera segura
import Button from "@/components/util/Button";  // Importa el componente Button desde la ruta especificada

// Define el componente funcional Products que recibe props: toEdit, onCancel y reload
const Products = ({ toEdit, onCancel, reload }) => (
    <div>
        {/* Contenedor principal que asegura un mínimo de altura para su contenido */}
        <div className='min-h-[300px]'>
                {/* Renderiza el componente TableProducts, pasando las props necesarias */}
                {/* toEdit: objeto que contiene información para editar, 
                    products: lista de productos obtenida de toEdit o un array vacío si no existe,
                    reload: función para recargar datos,
                    show: indica que se debe mostrar la tabla */}
            <TableProducts toEdit={toEdit} products={get(toEdit, "products", [])} reload={reload} show />
        </div>
        {/* Contenedor para el botón de cancelar, con márgenes y flexbox para el alineamiento */}
        <div className="mt-6 flex items-end justify-start gap-x-6 w-full md:w-1/4 ml-auto">
                    {/* Botón que ejecuta la función onCancel cuando es clicado */}
            <Button type="button" onClick={onCancel}>
                Cancelar
            </Button>
        </div>
    </div>
)

// Exporta el componente Products para que pueda ser utilizado en otras partes de la aplicación
export default Products