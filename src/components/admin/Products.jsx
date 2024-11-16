import React, { useState } from 'react';
import TableProducts from "./TableProducts";

const Products = ({ toEdit }) => {
    return (
        <div>
            <TableProducts products={get(toEdit, "products", [])} />
        </div>
    )
}

export default Products