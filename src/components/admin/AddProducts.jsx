import React, { useState, Fragment } from 'react';
import TableProducts from "./TableProducts";
import DropZone from "./DropZone";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import get from "lodash/get";
import Button from "@/components/util/Button";
import axios from "axios";

const Products = ({ toEdit }) => {
    const [products, setProducts] = useState([]);
    const [postLoad, setPostLoad] = useState(false);

    const postProducts = async () => {
        console.log("en products")
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

            const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/productos`, body)
            console.log(resp)
            setOpen(false)
            getCategories()
            setPostLoad(false);
        } catch (error) {
            console.log({ error })
            setPostLoad(false);
        }
    }

    return (
        <div className='h-[500px]'>
            <div className='flex justify-between'>
                <h3 className='text-2xl text-left mb-4'>Categoría: <strong>{toEdit.nombre}</strong></h3>
                {!isEmpty(products) && <Button >Agregar<strong className='px-2'>{get(products, "length")}</strong>productos</Button>}
            </div>
            {isEmpty(products)
                ? <DropZone setProducts={setProducts} />
                : <Fragment>
                    <Button onClick={() => setProducts([])}>Limpiar</Button>
                    <TableProducts products={products} />
                </Fragment>
            }
        </div>
    )
}

export default Products