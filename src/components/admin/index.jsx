import { useEffect, useState } from "react";
import axios from "axios";
import toString from "lodash/toString";
import isEmpty from "lodash/isEmpty";
import Form from "./Form";
import Modal from "./Modal";
import Confirm from "./Confirm";
import Button from "@/components/util/Button";

const Tabla = () => {
    const [categories, setCategories] = useState([]);
    const [toEdit, setToEdit] = useState({});
    const [toDelete, setToDelete] = useState({});
    const [open, setOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [postLoad, setPostLoad] = useState(false);
    const [putLoad, setPutLoad] = useState(false);
    const [deleteLoad, setDeleteLoad] = useState(false);

    console.log({postLoad, putLoad, deleteLoad})

    const getCategories = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`)
            setCategories(data)
        } catch (error) {
            console.log({ error })
        }
    }

    const postCategory = async (values) => {
        setPostLoad(true);
        try {
            const body = {
                slug: values.slug,
                nombre: values.nombre,
                imagen: values.imagen,
                type: values.type,
                active: toString(values.active),
            }
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, body)
            setOpen(false)
            getCategories()
            setPostLoad(false);
        } catch (error) {
            console.log({ error })
            setPostLoad(false);
        }
    }
    const putCategory = async (values) => {
        setPutLoad(true);
        console.log("put")
        try {
            const body = {
                _id: values._id,
                slug: values.slug,
                nombre: values.nombre,
                imagen: values.imagen,
                type: values.type,
                active: toString(values.active),
            }
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, body)
            setOpen(false)
            getCategories()
            setPutLoad(false);
        } catch (error) {
            console.log({ error })
            setPutLoad(false);
        }
    }
    const deleteCategory = async (values) => {
        setDeleteLoad(true);
        try {
            const params = { slug: values.slug }
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, { params })
            setOpen(false)
            getCategories();
            setDeleteLoad(false);
        } catch (error) {
            console.log({ error })
            setDeleteLoad(false);
        }
    }

    const onSubmit = (values) => (e) => {
        e.preventDefault();
        if (isEmpty(toEdit)) {
            console.log("edit")
            postCategory(values)
        } else {
            console.log("post")
            putCategory(values)
        }
    }


    useEffect(() => {
        getCategories()
    }, [])

    const onClick = () => {
        setOpen(state => !state)
    }
    const onEdit = (category) => () => {
        setToEdit(category);
        setOpen(true)
    }

    const confirmDelete = () => {
        deleteCategory(toDelete);
        setConfirm(false)
    }
    const onDelete = (category) => () => {
        setToDelete(category)
        setConfirm(true)
    }

    return (
        <div className="px-4 sm:px-2 lg:px-0 py-4">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Administrar Categorías</h1>
                    <p className="mt-2 text-sm text-gray-700">
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Button
                        onClick={onClick}
                        type="button"
                        btnClass="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Añadir
                    </Button>
                </div>
            </div>
            <Modal setOpen={setOpen} open={open} edit={!isEmpty(toEdit)}>
                <Form
                    onSubmit={onSubmit}
                    toEdit={toEdit}
                    className={open ? "overflow-auto" : `h-0 overflow-hidden`}
                    setOpen={setOpen}
                    setToEdit={setToEdit}
                    loading={postLoad || putLoad}
                />
            </Modal>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                        Foto
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Slug
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Nombre
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Tipo
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Activo
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {categories.map((category) => (
                                    <tr key={category._id} className="even:bg-gray-50">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                            <img src={category.imagen} className="h-10 w-10 rounded-full" />
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.slug}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.nombre}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.type}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.active === "true" ? "Si" : "No"}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                            <Button btnClass="text-indigo-600 hover:text-indigo-900 border border-gray-300 py-1" onClick={onEdit(category)}>
                                                Edit<span className="sr-only">, {category.name}</span>
                                            </Button>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                            <Button btnClass="text-indigo-600 hover:text-indigo-900 border border-gray-300 py-1" onClick={onDelete(category)}>
                                                Borrar<span className="sr-only">, {category.name}</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Confirm open={confirm} onConfirm={confirmDelete} onCancel={() => setConfirm(false)} />
        </div>
    )
}

export default Tabla;