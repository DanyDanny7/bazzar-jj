import React, { useState, Fragment } from 'react';
import TableProducts from "./TableProducts";
import DropZone from "./DropZone";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import get from "lodash/get";
import Button from "@/components/util/Button";
import axios from "axios";

const AddProducts = ({ toEdit, onCancel, reload, textNoti, setTextNoti }) => {
    const [products, setProducts] = useState([]);
    const [postLoad, setPostLoad] = useState(false);
    const [showPoop, setShopPoop] = useState(false);

    const postProducts = async () => {
        setPostLoad(true);
        try {
            const body = map(products, (product) => ({
                code: get(product, "code", ""),
                colors: get(product, "colors", ""),
                description: get(product, "description", ""),
                images: get(product, "images", ""),
                name: get(product, "name", ""),
                price: get(product, "price", ""),
                sizes: get(product, "sizes", ""),
                slug: get(product, "slug", ""),
                active: get(product, "active", "true"),
                category: get(toEdit, "slug", "")
            }))

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, body);
            reload()
        } catch (error) {
            console.log({ error })
        } finally {
            setPostLoad(false);
        }
    }

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
                                onMouseOver={() => setShopPoop(true)}
                                onMouseLeave={() => setShopPoop(false)}
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
                    ? <DropZone setProducts={setProducts} textNoti={textNoti} setTextNoti={setTextNoti} />
                    : <Fragment>
                        <TableProducts products={products} />
                    </Fragment>
                }
            </div>
            <div className="mt-6 flex items-end justify-start gap-x-6 w-full md:w-1/2 ml-auto">
                <Button type="button" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button type="button" onClick={() => setProducts([])}>
                    Limpiar
                </Button>
                <Button variant="contained" loading={postLoad} onClick={postProducts}>
                    Agregar<strong className='px-2'>{get(products, "length")}</strong>productos
                </Button>
            </div>
        </div>
    )
}

export default AddProducts;