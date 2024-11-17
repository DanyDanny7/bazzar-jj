import { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import toString from "lodash/toString";
import Button from "@/components/util/Button";

const defaultValues = {
    _id: null,
    slug: "",
    nombre: "",
    imagen: "",
    type: "1",
    active: false
}

const AddCategory = ({ className, setOpen, onSubmit, toEdit, setToEdit, loading }) => {
    const [values, setValues] = useState(defaultValues);

    const isEdit = !isEmpty(toEdit)

    useEffect(() => {
        if (!isEmpty(toEdit)) {
            setValues(toEdit)
        }
    }, [JSON.stringify(toEdit)])

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.name === "active" ? toString(e.target.checked) : e.target.value
        }))
    }
    const onCancel = () => {
        setOpen(false);
        setValues(defaultValues);
        setToEdit({})
    }

    return (
        <div className={className} >
            <form onSubmit={onSubmit(values)} >
                <div className="space-y-6 min-h-[200px]">
                    <div className="pb-6 text-left">
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 justify-start">
                            <div className="sm:col-span-2">
                                <label htmlFor="slug" className="block text-left text-md font-medium text-gray-900">
                                    Slug:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="slug"
                                        name="slug"
                                        type="text"
                                        placeholder='Código basado en el nombre usado como identificador'
                                        className={`block w-full ${isEdit ? "bg-gray-200" : ""} rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
                                        value={values.slug}
                                        onChange={onChange}
                                        disabled={isEdit}
                                    />
                                    <span className="text-red-500 text-xs">*Por favor, evita el uso de los siguiente caracteres '/' '|' '\' '&' '?'</span>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-left text-md font-medium text-gray-900">
                                    Nombre:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder='Nombre del producto'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        value={values.nombre}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="type" className="block text-left text-md font-medium text-gray-900">
                                    Tipo:
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="type"
                                        name="type"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        onChange={onChange}
                                        value={values.type}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label htmlFor="active" className="block text-left text-md font-medium text-gray-900">
                                    Activado:
                                </label>
                                <div className="flex h-6 items-center mt-2 ml-2">
                                    <input
                                        id="active"
                                        name="active"
                                        type="checkbox"
                                        className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        checked={!!(values.active === "true")}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-5">
                                <label htmlFor="pict" className="block text-left text-md font-medium text-gray-900">
                                    Url de la foto:
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="imagen"
                                        name="imagen"
                                        type="text"
                                        placeholder='Url de la foto'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        value={values.imagen}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-end justify-start gap-x-6 w-full md:w-1/2 ml-auto">
                    <Button type="button" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="contained" loading={loading}>
                        Guardar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory;