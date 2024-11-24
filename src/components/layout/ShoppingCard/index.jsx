'use client'

import { useContext } from 'react'
import { XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid';
import get from "lodash/get";
import map from "lodash/map";
import sumBy from "lodash/sumBy";
import isEmpty from "lodash/isEmpty";
import toNumber from "lodash/toNumber";
import Button from "@/components/util/Button"
import Drawer from "./Drawer";
import { ShoopingCartContext } from "./ContextShoppingCart";
import { useRouter } from "next/router"

export default function ShoppingCard({ open, setOpen }) {
    const router = useRouter();
    const { cartList, deleteItemToCart, updateList } = useContext(ShoopingCartContext);

    const onChangeQuantity = (e, product) => {
        const indexToReplace = cartList.data.findIndex(({ key }) => key === product.key);
        if (indexToReplace !== -1) {
            const newList = [...cartList.data];
            const quantity = toNumber(e.target.value)
            newList.splice(indexToReplace, 1, {
                ...product,
                quantity,
                total: product.price * quantity
            });
            updateList(newList)
        }
    }

    const generateComprobante = () => {
        const list = map(cartList.data, ({ name, color, size, price, quantity, total, code }) => ({ name, color, size, price, quantity, total, code }))
        const productos = encodeURIComponent(JSON.stringify(list));
        router.push({ pathname: '/comprobante-de-productos', query: { p: productos } })
    }

    return (
        <div className="bg-white">

            <Drawer open={open} setOpen={setOpen}>
                <p className="flex h-10 items-center justify-center bg-gray-800 px-8 md:px-4 text-xs md:text-sm font-medium text-white sm:px-6 lg:px-8 text-center md:text-left leading-[1.1]">
                    Obten envío grátis por compras mayores a $50
                </p>

                <main className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 relative">
                        <section aria-labelledby="cart-heading" className="col-span-12">
                            <h2 id="cart-heading" className="sr-only">
                                Elementos en tu carro de compras
                            </h2>

                            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                                {map(get(cartList, "data", []), (product, productIdx) => (
                                    <li key={`${get(product, "_id")}_${get(product, "color")}_${get(product, "size")}`} className="flex py-3 sm:py-6">
                                        <a className="shrink-0" href={`/${get(product, "category")}/${get(product, "slug")}`} >
                                            <img
                                                alt={get(product, "images.[0].imageAlt")}
                                                src={get(product, "images.[0].imageSrc")}
                                                className="size-24 rounded-md object-cover sm:size-32"
                                            />
                                        </a>

                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm md:text-lg">
                                                            <a href={`/${get(product, "category")}/${get(product, "slug")}`} className="font-normal md:font-semibold text-gray-900 hover:text-gray-800">
                                                                {get(product, "name")}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className='flex flex-col sm:flex-row gap-1 md:gap-4'>
                                                        <div className="mt-1 flex text-sm md:text-base">
                                                            <p className="text-gray-500">{get(product, "color")}</p>
                                                            {get(product, "size") ? (
                                                                <p className="ml-2 md:ml-4 border-l border-gray-200 pl-2 md:pl-4 text-gray-500">{`Talla: ${get(product, "size")}`}</p>
                                                            ) : null}
                                                        </div>
                                                        <p className="mt-0 md:mt-1 text-sm md:text-base border-l-0 md:border-l pl-0 md:pl-4 font-medium text-gray-900 md:text-gray-500">{`$ ${get(product, "price")}`}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-2 md:mt-4 sm:mt-0 sm:pr-9">
                                                    <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                        Cantidad, {get(product, "name")}
                                                    </label>
                                                    <select
                                                        id={`quantity-${productIdx}`}
                                                        name={`quantity-${productIdx}`}
                                                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base/5 font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e) => onChangeQuantity(e, product)}
                                                        defaultValue={get(product, "quantity", 1)}
                                                    >
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>

                                                    <div className="absolute right-0 top-0">
                                                        <Button type="button" onClick={() => deleteItemToCart(product)} className="inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Eliminar</span>
                                                            <XMarkIconMini aria-hidden="true" className="h-4 w-4 min-w-[16px]" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {
                                isEmpty(get(cartList, "data", [])) &&
                                <div className='py-10 text-xl font-semibold'>
                                    No tienes productos en tu carrito
                                </div>
                            }

                        </section>

                        {/* Order summary */}
                        <section aria-labelledby="summary-heading" className="rounded bg-gray-50 px-2 md:px-4 py-2 md:py-4 col-span-12 p-2 lg:p-4 sticky bottom-0 shadow-inner">
                            <Button onClick={generateComprobante} type="button" variant="contained" className="bg-gray-900 hover:bg-gray-800 focus:bg-gray-800">
                                <div className='flex flex-row items-center justify-between gap-1 md:gap-4 text-xs md:text-base w-full px-0 md:px-4'>
                                    <span className='self-start md:self-center'>Ver comprobante</span>
                                    <dl className="self-end md:self-center">
                                        <div className="flex gap-2 md:gap-3 items-center justify-between">
                                            <dt className="">Total:</dt>
                                            <dd className="text-sm md:text-2xl">{`$ ${Number((sumBy(cartList.data, "total")).toFixed(2)).toLocaleString()}`}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </Button>
                        </section>
                    </div>

                </main>
            </Drawer>
        </div >
    )
}
