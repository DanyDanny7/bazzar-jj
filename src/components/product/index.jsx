/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'

import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Radio,
    RadioGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import {
    Bars3Icon,
    CurrencyDollarIcon,
    GlobeAmericasIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'


// const product = {
//     name: 'Basic Tee',
//     price: '$35',
//     href: '#',
//     breadcrumbs: [
//         { id: 1, name: 'Women', href: '#' },
//         { id: 2, name: 'Clothing', href: '#' },
//     ],
//     images: [
//         {
//             id: 1,
//             imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//             imageAlt: "Back of women's Basic Tee in black.",
//             primary: true,
//         },
//         {
//             id: 2,
//             imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//             imageAlt: "Side profile of women's Basic Tee in black.",
//             primary: false,
//         },
//         {
//             id: 3,
//             imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//             imageAlt: "Front of women's Basic Tee in black.",
//             primary: false,
//         },
//     ],
//     colors: [
//         { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
//         { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
//     ],
//     sizes: [
//         { name: 'XXS', inStock: true },
//         { name: 'XS', inStock: true },
//         { name: 'S', inStock: true },
//         { name: 'M', inStock: true },
//         { name: 'L', inStock: true },
//         { name: 'XL', inStock: false },
//     ],
//     description: `
//     <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
//     <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
//   `,
//     details: [
//         'Only the best materials',
//         'Ethically and locally made',
//         'Pre-washed and pre-shrunk',
//         'Machine wash cold with similar colors',
//     ],
// }
const policies = [
    { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ product }) {
    const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[2])


    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleWhatsAppClick = (e) => {
        e.preventDefault()
        // Validate selections before sending message
        if (!selectedColor || !selectedSize) {
            alert("Por favor, selecciona un color y una talla.");
            return; // Prevent sending an incomplete message
        }
        const productoName = product.name;
        const message = `Quiero pedir el producto ${productoName} en color ${selectedColor.name} y talla ${selectedSize.name}.`;
        const whatsappUrl = `http://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                        <p className="text-xl font-medium text-gray-900">{product.price}</p>
                    </div>

                </div>

                {/* Image gallery */}
                <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                        {product?.images?.map((image) => (
                            <img
                                key={image.id}
                                alt={image.imageAlt}
                                src={image.imageSrc}
                                className={classNames(
                                    image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                                    'rounded-lg',
                                )}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-8 lg:col-span-5">
                    <form>
                        {/* Color picker */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-900">Color</h2>

                            <fieldset aria-label="Choose a color" className="mt-2">
                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                                    {product?.colors?.map((color) => (
                                        <Radio
                                            key={color.name}
                                            value={color}
                                            aria-label={color.name}
                                            className={classNames(
                                                color.selectedColor,
                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    color.bgColor,
                                                    'h-8 w-8 rounded-full border border-black border-opacity-10',
                                                )}
                                            />
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>

                        {/* Size picker */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-gray-900">Size</h2>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    See sizing chart
                                </a>
                            </div>

                            <fieldset aria-label="Choose a size" className="mt-2">
                                <RadioGroup
                                    value={selectedSize}
                                    onChange={setSelectedSize}
                                    className="grid grid-cols-3 gap-3 sm:grid-cols-6"
                                >
                                    {product?.sizes?.map((size) => (
                                        <Radio
                                            key={size.name}
                                            value={size}
                                            disabled={!size.inStock}
                                            className={classNames(
                                                size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                                                'flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-indigo-600 data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-indigo-500 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-700 sm:flex-1',
                                            )}
                                        >
                                            {size.name}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </fieldset>
                        </div>



                        <button
                            onClick={handleWhatsAppClick} disabled={!selectedColor || !selectedSize}
                            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-whatsapp duration-300 px-8 py-3 text-base font-medium text-white hover:bg-whatsapp_dark focus:outline-none focus:ring-2 focus:ring-whatsapp_dark focus:ring-offset-2"
                        >
                            {/* Display product details */}
                            {/* ... your color selection component using handleColorChange */}
                            {/* ... your size selection component using handleSizeChange */}
                            <div className='flex gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" ><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                                <span className='font-semibold text-lg'>Pedir por WhatsApp</span>
                            </div>
                        </button>



                    </form>

                    {/* Product details */}
                    <div className="mt-10">
                        <h2 className="text-sm font-medium text-gray-900">Description</h2>

                        <div
                            dangerouslySetInnerHTML={{ __html: product.description }}
                            className="prose prose-sm mt-4 text-gray-500"
                        />
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                        <div className="prose prose-sm mt-4 text-gray-500">
                            <ul role="list">
                                {product?.details?.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Policies */}
                    <section aria-labelledby="policies-heading" className="mt-10">
                        <h2 id="policies-heading" className="sr-only">
                            Our Policies
                        </h2>

                        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            {policies?.map((policy) => (
                                <div key={policy.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                    <dt>
                                        <policy.icon aria-hidden="true" className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" />
                                        <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                </div>
            </div>
        </div>
    )
}
