import React from 'react';
import TableProducts from "./TableProducts";
import get from "lodash/get";

const Products = ({ toEdit }) => {
    return (
        <div>
            <TableProducts products={get(toEdit, "products", [])} />
        </div>
    )
}

export default Products