import { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

const defaultValues = {
    _id: null,
    slug: "",
    nombre: "",
    imagen: "",
    type: "1",
    active: false
}

const Form = ({ className, setOpenForm, onSubmit, edit }) => {
    const [values, setValues] = useState(defaultValues);

    useEffect(() => {
        if (!isEmpty(edit)) {
            setValues(edit)
        }
    }, [JSON.stringify(edit)])


    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.name === "active" ? e.target.checked : e.target.value
        }))
    }
    const onCancel = () => {
        setOpenForm(false);
        setValues(defaultValues)
    }

    return (
        <div className={className} onSubmit={onSubmit(values)}>
            <form >
                <div className="space-y-6">
                    <div className="pb-6">
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10">
                            <div className="sm:col-span-2">
                                <label htmlFor="slug" className="block text-sm/6 font-medium text-gray-900">
                                    Slug
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="slug"
                                        name="slug"
                                        type="text"
                                        placeholder='Código basado en el nombre usado como identificador'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        value={values.slug}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder='Nombre del producto'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        value={values.nombre}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                                    Tipo
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="type"
                                        name="type"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        onChange={onChange}
                                        value={values.type}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="pict" className="block text-sm/6 font-medium text-gray-900">
                                    Foto
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="imagen"
                                        name="imagen"
                                        type="text"
                                        placeholder='Url de la foto'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        value={values.imagen}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="text-sm/6">
                                    <label htmlFor="active" className="font-medium text-gray-900">
                                        Activado
                                    </label>
                                </div>
                                <div className="flex h-6 items-center mt-2">
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
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="border px-3 py-2 rounded-md text-sm/6 font-semibold text-gray-900 " onClick={onCancel}>
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;