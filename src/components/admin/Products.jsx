import React from 'react';
import TableProducts from "./TableProducts";
import get from "lodash/get";
import Button from "@/components/util/Button";

const Products = ({ toEdit, onCancel, reload }) => (
    <div>
        <div className='min-h-[300px]'>
            <TableProducts toEdit={toEdit} products={get(toEdit, "products", [])} reload={reload} show />
        </div>
        <div className="mt-6 flex items-end justify-start gap-x-6 w-full md:w-1/4 ml-auto">
            <Button type="button" onClick={onCancel}>
                Cancelar
            </Button>
        </div>
    </div>
)

export default Products