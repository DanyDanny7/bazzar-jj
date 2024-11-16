import React, { useState, Fragment } from 'react';
import TableProducts from "./TableProducts";
import DropZone from "./DropZone";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import get from "lodash/get";
import Button from "@/components/util/Button";
import axios from "axios";

const Products = ({ toEdit, onCancel }) => {
    const [products, setProducts] = useState([]);
    const [postLoad, setPostLoad] = useState(false);

    const postProducts = async () => {
        setPostLoad(true);
        try {
            const body = map(products, (product) => ({
                code: get(product, "code"),
                colors: get(product, "colors"),
                description: get(product, "description"),
                images: get(product, "images"),
                name: get(product, "name"),
                price: get(product, "price"),
                sizes: get(product, "sizes"),
                slug: get(product, "slug"),
                active: "true",
                category: get(toEdit, "slug")
            }))

            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/productos`, body)
            setOpen(false)
            getCategories()
            setPostLoad(false);
        } catch (error) {
            console.log({ error })
            setPostLoad(false);
        }
    }

    return (
        <div className=''>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-left mb-4'>Categoría: <strong>{toEdit.nombre}</strong></h3>
            </div>
            {isEmpty(products)
                ? <DropZone setProducts={setProducts} />
                : <Fragment>
                    <TableProducts products={products} />
                </Fragment>
            }
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

export default Products