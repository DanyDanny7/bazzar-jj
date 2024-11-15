import React, { useState } from 'react';
import TableProducts from "./TableProducts";
import DropZone from "./DropZone";
import isEmpty from "lodash/isEmpty";
import Button from "@/components/util/Button";

const Products = ({ toEdit }) => {
    const [products, setProducts] = useState([]);

    return (
        <div>
            {isEmpty(products)
                ? <DropZone setProducts={setProducts} />
                : <Button onClick={() => setProducts([])}>Limpiar</Button>
            }

            {/* <TableProducts products={get(toEdit, "products", [])} /> */}
            <TableProducts products={products} />
        </div>
    )
}

export default Products