import { useEffect, useState } from "react";
import axios from "axios";
import toString from "lodash/toString";
import isEmpty from "lodash/isEmpty";
import AddCategory from "./AddCategory";
import Products from "./Products";
import AddProducts from "./AddProducts";
import Modal from "./Modal";
import Confirm from "./Confirm";
import Table from "./Table";
import Button from "@/components/util/Button";
import Notification from "./Notification"

const Admin = () => {
    const [categories, setCategories] = useState([]);
    const [toEdit, setToEdit] = useState({});
    const [toDelete, setToDelete] = useState({});
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState(false);
    const [addProducts, setAddProducts] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [getLoad, setGetLoad] = useState(true);
    const [postLoad, setPostLoad] = useState(false);
    const [putLoad, setPutLoad] = useState(false);
    const [deleteLoad, setDeleteLoad] = useState(false);
    const [textNoti, setTextNoti] = useState();

    const getCategories = async () => {
        setGetLoad(true);
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`)
            setCategories(data)
        } catch (error) {
            console.log({ error })
        } finally {
            setGetLoad(false);
        }
    }

    const onCancel = () => {
        setOpen(false)
        setProducts(false)
        setAddProducts(false)
        setConfirm(false)
        setTimeout(() => {
            setToDelete({})
            setToEdit({})
        }, 1000);
    }

    const reload = () => {
        getCategories();
        onCancel()
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
                products: []
            }
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, body)
            reload()
        } catch (error) {
            console.log({ error })
        } finally {
            setPostLoad(false);
        }
    }
    const putCategory = async (values) => {
        setPutLoad(true);
        try {
            const body = {
                nombre: values.nombre,
                imagen: values.imagen,
                type: values.type,
                active: toString(values.active),
            }
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias?slug=${values.slug}`, body)
            reload()
        } catch (error) {
            console.log({ error })
        } finally {
            setPutLoad(false);
        }
    }
    const deleteCategory = async (values) => {
        setDeleteLoad(true);
        try {
            const params = { slug: values.slug }
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/categorias`, { params })
            reload()
        } catch (error) {
            console.log({ error })
        } finally {
            setDeleteLoad(false);
        }
    }

    const onSubmit = (values) => (e) => {
        e.preventDefault();
        if (isEmpty(toEdit)) {
            postCategory(values)
        } else {
            putCategory(values)
        }
    }

    useEffect(() => {
        reload()
    }, [])


    const onAdd = () => setOpen(state => !state)

    const onEdit = (category) => (e) => {
        e.preventDefault();
        setToEdit(category);
        setOpen(true)
    }
    const addNewProducts = (category) => (e) => {
        e.preventDefault();
        setToEdit(category);
        setAddProducts(true)
    }
    const showProducts = (category) => (e) => {
        e.preventDefault();
        setToEdit(category);
        setProducts(true)
    }

    const confirmDelete = () => {
        deleteCategory(toDelete);
        setConfirm(false);
        setToEdit({});
        setToDelete({});
        reload();
    }
    const onDelete = (category) => (e) => {
        e.preventDefault();
        setToDelete(category)
        setConfirm(true)
    }

    return (
        <div>
            <div className="px-4 sm:px-2 lg:px-0 py-4">
                <Modal setOpen={onCancel} open={open} title={!isEmpty(toEdit) ? "Editar categoría" : "Crear categoría"}>
                    <AddCategory
                        onSubmit={onSubmit}
                        toEdit={toEdit}
                        className={open ? "overflow-auto" : `h-0 overflow-hidden`}
                        setOpen={setOpen}
                        setToEdit={setToEdit}
                        loading={postLoad || putLoad}
                    />
                </Modal>
                <Modal setOpen={onCancel} open={products} edit={!isEmpty(toEdit)}>
                    <Products toEdit={toEdit} onCancel={onCancel} reload={getCategories} />
                </Modal>
                <Modal setOpen={onCancel} open={addProducts} edit={!isEmpty(toEdit)}>
                    <AddProducts toEdit={toEdit} onCancel={onCancel} reload={reload} setTextNoti={setTextNoti} textNoti={textNoti} />
                </Modal>

                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold text-gray-900">Administrar Categorías</h1>
                        <p className="mt-2 text-sm text-gray-700">
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Button onClick={onAdd} type="button" variant="contained">
                            Agregar Categoría
                        </Button>
                    </div>
                </div>
                <Table loading={getLoad} onEdit={onEdit} onDelete={onDelete} showProducts={showProducts} categories={categories} onAdd={onAdd} addNewProducts={addNewProducts} />
                <Confirm toDelete={toDelete} open={confirm} onConfirm={confirmDelete} onCancel={onCancel} loading={deleteLoad} />
            </div>
            <Notification text={textNoti} open={!!textNoti} setClose={() => setTextNoti("")} />
        </div>
    )
}

export default Admin;