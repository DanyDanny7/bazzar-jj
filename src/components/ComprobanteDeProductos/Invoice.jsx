'use client'

import sumBy from "lodash/sumBy";
import map from "lodash/map";

const Invoice = ({ products, url }) => {
    return (
        <div className="px-1 sm:px-6 md:px-10 lg:px-12 pb-4 pt-14 w-full">
            <div className="">
                <div className="">
                    <h1 className="text-xl md:text-3xl font-semibold text-gray-900 whitespace-nowrap">Comprobante de productos</h1>
                    <p className="mt-4 text-md text-gray-700">
                        Contáctanos por Whatsapp al
                        <a className='px-2 inline-block text-whatsapp_dark' target='_blank' href={`http://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${url}`}>
                            <span className="tracking-wide">{process.env.NEXT_PUBLIC_WA_NUMBER}</span>
                        </a>
                        para coordinar entrega o visítanos en nuestro local estamos ubicados en el Edificio Santa Teresa, en la 2a Calle Oriente &, 4a Avenida Sur, San Salvador.
                    </p>
                </div>
            </div>
            <div className="mx-0 mt-8 flow-root sm:mx-0">
                <table className="min-w-full">
                    <colgroup>
                        <col className="w-full sm:w-1/2" />
                        <col className="sm:w-1/6" />
                        <col className="sm:w-1/6" />
                        <col className="sm:w-1/6" />
                    </colgroup>
                    <thead className="border-b border-gray-300 text-gray-900">
                        <tr>
                            <th scope="col" className="py-3 text-left text-base font-semibold text-gray-900 sm:pl-0">
                                Producto
                            </th>
                            <th
                                scope="col"
                                className="px-1 sm:px-3 py-3 text-right text-base font-semibold text-gray-900 table-cell"
                            >
                                <span className="inline sm:hidden">Und.</span>
                                <span className="hidden sm:inline ">Unidad</span>
                            </th>
                            <th
                                scope="col"
                                className="px-1 sm:px-3 py-3 text-right text-base font-semibold text-gray-900 table-cell"
                            >
                                <span className="inline sm:hidden">Cant.</span>
                                <span className="hidden sm:inline ">Cantidad</span>
                            </th>
                            <th scope="col" className="py-3 text-right text-base font-semibold text-gray-900">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {map(products, (product, i) => (
                            <tr key={i} className="border-b border-gray-200">
                                <td className="max-w-0 py-1 my-1 text-base sm:pl-0">
                                    <div className="pt-1 font-medium text-gray-900">{product.name}</div>
                                    <div className="mt-1 pb-2 truncate text-gray-500">{`Color: ${product.color}, Talla: ${product.size}`}</div>
                                </td>
                                <td className="px-1 sm:px-3 py-2 my-1 text-right text-base text-gray-500 table-cell">{`$ ${Number((product.price).toFixed(2)).toLocaleString()}`}</td>
                                <td className="px-1 sm:px-3 py-2 my-1 text-center text-base text-gray-500 table-cell">{product.quantity}</td>
                                <td className="py-2 my-1 text-right text-base text-gray-500">{`$ ${Number((product.total).toFixed(2)).toLocaleString()}`}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th
                                scope="row"
                                colSpan={3}
                                className="pt-4 text-right text-base font-semibold text-gray-900 table-cell sm:pl-0"
                            >
                                Total
                            </th>
                            {/* <th scope="row" className="pl-4 pt-4 text-left text-base font-semibold text-gray-900 sm:hidden">
                                Total
                            </th> */}
                            <td className="pl-3 pt-4 text-right text-base font-semibold text-gray-900 whitespace-nowrap">{`$ ${Number((sumBy(products, "total")).toFixed(2)).toLocaleString()}`}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="sm:flex-auto mt-20">
                <p className="mt-2 text-sm text-gray-700">
                    <strong>Nota:</strong> Este documento no representa ni sustituye una factura de consumidor final, para poder proceder con la adquisición de sus productos pulse sobre el siguiente número de Whatsapp
                    <a className='px-1 inline-block text-whatsapp_dark' target='_blank' href={`http://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${url}`}>
                        <span className="tracking-wide">{process.env.NEXT_PUBLIC_WA_NUMBER}</span>
                    </a>
                    o presente este comprobante en nuestra sucursal.
                </p>
            </div>
        </div>
    )
}

export default Invoice;