import { useContext } from "react";
import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import find from "lodash/find";
import get from "lodash/get";
import dynamic from 'next/dynamic';
import Button from "@/components/util/Button";
import { signOut, useSession } from "next-auth/react";
import { ShoopingCartContext } from "@/components/layout/ShoppingCard/ContextShoppingCart";

const Footer = dynamic(() => import('./Footer'), { ssr: false });
const CategoriesMenu = dynamic(() => import('./components/CategoriesMenu'), { ssr: false });
const ShoppingCard = dynamic(() => import('./ShoppingCard'), { ssr: false });

export default function Layout({ children }) {
  const { cartList } = useContext(ShoopingCartContext);

  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const router = useRouter()
  const { category } = router.query;

  const [active, setActive] = useState("")
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(false)
    setActive(category)
  }, [category])

  const getCategories = async () => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, { params: { active: "true" } })
      .then(({ data }) => setMenu(data))
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    getCategories()
  }, []);

  const onSingOut = async () => {
    setLoading(true)
    //
    await signOut({ redirect: false })
    setLoading(false)
    //
    router.push("/login")
  }

  const isLogged = status === "authenticated";

  return (
    <>
      <div className="min-h-full relative">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center w-[38px]">
                  <Link href="/">
                    <img
                      alt="Your Company"
                      src="/bazzar-jj-logo.png"
                      className="block h-8 w-auto lg:hidden"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      alt="Your Company"
                      src="/bazzar-jj-logo.png"
                      className="hidden h-8 w-auto lg:block"
                    />
                  </Link>
                </div>
                <div className="flex sm:-my-px ml-4 sm:ml-6 sm:space-x-8">
                  <div
                    className={'border-transparent text-gray-800 inline-flex items-center border-b-2 px-1 pt-1 text-lg md:text-2xl font-medium'}
                  >
                    {get(find(menu, ({ slug }) => slug === active), "nombre", "")}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex items-center ">
                {isLogged && <Button loading={loading} className="ml-auto" variant="transparent" onClick={onSingOut} ><span className='whitespace-nowrap	'>Cerrar Sesión</span></Button>}
                <Button loading={loading} className="ml-auto" variant="transparent" onClick={() => setOpenCart(true)} >
                  <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    {get(cartList, "data.length", 0) > 0 &&
                      <div className='absolute -bottom-2 -right-2 bg-gray-900 text-white rounded-full h-5 w-5 min-w-[20px] text-xs flex items-center justify-center'>
                        {get(cartList, "data.length")}
                      </div>
                    }
                  </div>
                </Button>
                <DisclosureButton
                  className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 " />
                </DisclosureButton>
              </div>
            </div>
          </div>
          <CategoriesMenu open={open} setOpen={setOpen} menu={menu} active={active} />
          <ShoppingCard open={openCart} setOpen={setOpenCart} />
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}
