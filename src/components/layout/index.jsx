import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import find from "lodash/find";
import get from "lodash/get";
import dynamic from 'next/dynamic';
import Button from "@/components/util/Button";
import { signOut, useSession } from "next-auth/react";

const Footer = dynamic(() => import('./Footer'), { ssr: false });
const Drawer = dynamic(() => import('./Drawer'), { ssr: false });

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false)
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
    await signOut({redirect:false})
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
                {isLogged && <Button loading={loading} className="ml-auto" variant="transparent" onClick={onSingOut} >Cerrar Sesión</Button>}
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
          <Drawer open={open} setOpen={setOpen} menu={menu} active={active} />
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  )
}
