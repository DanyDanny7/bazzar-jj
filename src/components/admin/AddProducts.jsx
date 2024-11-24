// Importación de librerías y componentes necesarios
import React, { useState, Fragment } from 'react';
import TableProducts from "./TableProducts";// Componente para mostrar la tabla de productos
import DropZone from "./DropZone";// Componente para la carga de archivos
import isEmpty from "lodash/isEmpty";// Función para verificar si un objeto está vacío
import map from "lodash/map";// Función para mapear arrays
import get from "lodash/get";// Función para obtener propiedades de objetos
import Button from "@/components/util/Button";// Componente de botón reutilizable
import axios from "axios";// Librería para realizar solicitudes HTTP

// Componente principal para agregar productos
const AddProducts = ({ toEdit, onCancel, reload, textNoti, setTextNoti }) => {
    // Estados locales para manejar productos, estado de carga y visibilidad de mensajes
    const [products, setProducts] = useState([]);// Estado para almacenar los productos
    const [postLoad, setPostLoad] = useState(false);// Estado para manejar la carga al enviar productos
    const [showPoop, setShopPoop] = useState(false);// Estado para mostrar/ocultar mensaje de advertenci

     // Función asíncrona para enviar productos al servidor
    const postProducts = async () => {
        setPostLoad(true);// Activa el estado de carga
        try {
            // Mapea los productos a un formato adecuado para el envío
            const body = map(products, (product) => ({
                code: get(product, "code", ""),// Código del producto
                colors: get(product, "colors", ""),// Colores del producto
                description: get(product, "description", ""),// Descripción del producto
                images: get(product, "images", ""),// Imágenes del producto
                name: get(product, "name", ""),// Nombre del producto
                price: get(product, "price", ""),// Precio del producto
                sizes: get(product, "sizes", ""),// Tallas del producto
                slug: get(product, "slug", ""),// Slug del producto
                active: get(product, "active", "true"),// Estado activo del producto
                category: get(toEdit, "slug", "")// Categoría del producto
            }))

            // Envía los productos al servidor
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, body);
            reload()// Recarga la lista de productos
        } catch (error) {
            console.log({ error })// Manejo de errores
        } finally {
            setPostLoad(false);// Desactiva el estado de carga
        }
    }

    // Renderiza el componente
    return (
        <div className=''>
            <div className='min-h-[300px]'>
                <div className='block md:flex justify-between'>
                    <h3 className='text-2xl text-left mb-4'>Categoría: <strong>{toEdit.nombre}</strong></h3>
                    <div className='text-right pb-1 flex gap-4 relative'>
                        <div className=' cursor-pointer relative'>
                            <div className={`h-[50px] w-[260px] absolute -top-3  -translate-x-full -left-2 border bg-[#000000] p-1 flex items-center rounded-md duration-300 ${showPoop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                                <div className="text-white text-sm leading-[1.4] text-left">*Por favor, en la plantilla evita el uso de los siguiente caracteres '/' '|' '\' '&' '?'</div>
                            </div>
                            <svg
                                onMouseOver={() => setShopPoop(true)}// Muestra el mensaje al pasar el mouse
                                onMouseLeave={() => setShopPoop(false)}// Oculta el mensaje al salir el mouse
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="red"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                        </div>
                        <a className='text-blue-600' href="/template/tempalte_productos.csv" download >Descargar plantilla CSV</a><br />
                    </div>
                </div>
                {isEmpty(products)
                // Si la lista de productos está vacía, mostrar el componente DropZone
                    ? <DropZone setProducts={setProducts} textNoti={textNoti} setTextNoti={setTextNoti} />
                     // Si hay productos, mostrar la tabla de productos
                    : <Fragment>
                        <TableProducts products={products} />
                    </Fragment>
                }
            </div>

            {/* Contenedor para los botones de acción */}
            <div className="mt-6 flex items-end justify-start gap-x-6 w-full md:w-1/2 ml-auto">
             {/* Botón para cancelar la acción */}
                <Button type="button" onClick={onCancel}>
                    Cancelar
                </Button>
                 {/* Botón para limpiar la lista de productos */}
                <Button type="button" onClick={() => setProducts([])}>
                    Limpiar
                </Button>
                {/* Botón para agregar productos, con un indicador de carga y el número de productos */}
                <Button variant="contained" loading={postLoad} onClick={postProducts}>
                    Agregar<strong className='px-2'>{get(products, "length")}</strong>productos
                </Button>
            </div>
        </div>
    )
}

// Exportar el componente para su uso en otras partes de la aplicación
export default AddProducts;