import React, { useCallback, useState } from 'react'
import { get, includes, map, split, trim, capitalize, lowerCase } from 'lodash';
import { useDropzone } from 'react-dropzone'
import * as XLSX from 'xlsx';


const DropZone = ({ setProducts, module, getFile, type = 1, edit }) => {
    const [showNoti, setShowNoti] = useState({ open: false, msg: "", variant: "" })

    const onDrop = useCallback((acceptedFiles, e) => {
        try {
            const newFile = acceptedFiles[0];
            if (includes(get(newFile, "name"), ".csv")) {

                const fileReader = new FileReader();
                fileReader.readAsArrayBuffer(newFile);

                fileReader.onload = (e) => {
                    try {
                        const bufferArray = e.target.result;
                        const wb = XLSX.read(bufferArray, { type: 'buffer' });
                        const wsname = wb.SheetNames[0];
                        const ws = wb.Sheets[wsname];
                        const toJson = XLSX.utils.sheet_to_json(ws);

                        const list = map(toJson, (p) => {
                            return ({
                                slug: p.slug,
                                name: p.name,
                                code: p.code,
                                price: p.price,
                                description: p.description,
                                images: map(split(p.images, ","), (img, i) => ({
                                    key: i + 1,
                                    imageSrc: trim(img),
                                    imageAlt: `${p.name} ${i + 1}`,
                                    primary: i === 0
                                })),
                                colors: map(split(p.colors, ","), (color, i) => ({
                                    key: i + 1,
                                    name: capitalize(trim(color)),
                                    slug: lowerCase(trim(color)),
                                })),
                                sizes: [
                                    { name: "3", inStock: !!get(p, "3", false) },
                                    { name: "4", inStock: !!get(p, "4", false) },
                                    { name: "5", inStock: !!get(p, "5", false) },
                                    { name: "7", inStock: !!get(p, "7", false) },
                                    { name: "9", inStock: !!get(p, "9", false) },
                                    { name: "11", inStock: !!get(p, "11", false) },
                                    { name: "13", inStock: !!get(p, "13", false) },
                                    { name: "14", inStock: !!get(p, "14", false) },
                                    { name: "15", inStock: !!get(p, "15", false) },
                                    { name: "17", inStock: !!get(p, "17", false) },
                                    { name: "19", inStock: !!get(p, "19", false) },
                                    { name: "21", inStock: !!get(p, "21", false) },
                                    { name: "23", inStock: !!get(p, "23", false) },
                                    { name: "30", inStock: !!get(p, "30", false) },
                                    { name: "32", inStock: !!get(p, "32", false) },
                                    { name: "34", inStock: !!get(p, "34", false) },
                                    { name: "36", inStock: !!get(p, "36", false) },
                                    { name: "38", inStock: !!get(p, "38", false) },
                                    { name: "XS", inStock: !!get(p, "XS", false) },
                                    { name: "S", inStock: !!get(p, "S", false) },
                                    { name: "M", inStock: !!get(p, "M", false) },
                                    { name: "L", inStock: !!get(p, "L", false) },
                                    { name: "XL", inStock: !!get(p, "XL", false) },
                                    { name: "2XL", inStock: !!get(p, "2XL", false) },
                                    { name: "3XL", inStock: !!get(p, "3XL", false) },
                                ]
                            })
                        })

                        setProducts(list)

                    } catch (error) {
                        fileReader.onerror = (error) => {
                            console.log(error)
                        };
                    }
                };

                // getFile(newFile) // este llena el submit
                // setFile(newFile) // este llena la vista previa.
            } else {
                // setShowNoti({ open: true, msg: __(`${module}.modal.error.file`), variant: "error" })
            }
        } catch (error) {
            console.log(error)
            // setShowNoti({ open: true, msg: __(`${module}.modal.error.file`), variant: "error" })
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='flex flex-col justify-between gap-4'>
            <div className='flex-1'>
                <input {...getInputProps()} />
                <div {...getRootProps()} >
                    <div className='h-[250px] w-full border rounded-sm p-2 cursor-pointer flex justify-center flex-col items-center'>
                        <svg className="w-[112px] h-[112px] mb-4" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="112" height="112" rx="56" fill="#EDFFFD" />
                            <g clipPath="url(#clip0_266_22168)">
                                <path d="M61.3334 29.3333H40.0001C37.0667 29.3333 34.6934 31.7333 34.6934 34.6666L34.6667 77.3333C34.6667 80.2666 37.0401 82.6666 39.9734 82.6666H72.0001C74.9334 82.6666 77.3334 80.2666 77.3334 77.3333V45.3333L61.3334 29.3333ZM72.0001 77.3333H40.0001V34.6666H58.6667V48H72.0001V77.3333ZM45.3334 64.0266L49.0934 67.7866L53.3334 63.5733V74.6666H58.6667V63.5733L62.9067 67.8133L66.6667 64.0266L56.0267 53.3333L45.3334 64.0266Z" fill="#13BFA8" />
                            </g>
                            <defs>
                                <clipPath id="clip0_266_22168">
                                    <rect width="64" height="64" fill="white" transform="translate(24 24)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className='min-h-[100px]'>
                            {isDragActive
                                ? <>
                                    Suelta tu CSV asquí.
                                    <br />
                                </>
                                : <div>
                                    Haz click aquí o arrastra tu archivo CSV <br />con los productos a cargar en esta categoría.
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default DropZone
