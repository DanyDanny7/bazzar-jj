import Link from "next/link";
import { useRouter } from 'next/router';


/*
---prueba 234 mjruiz
  This example requires some changes to your config:

  ---prueba mjruiz
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
        name: 'Desk and Office 1',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        slug: 'desk-and-office-1',
    },
    {
        name: 'Self-Improvement 2',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        slug: 'self-mprovement-2',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials 3',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        slug: 'travel',
    },

    {
        name: 'Self-Improvement 5',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        slug: 'self-mprovement-5',
    },
    {
        name: 'Travel 5',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        slug: 'travel-5',
    },
    {
        name: 'Desk and Office 4',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        slug: 'desk-and-office-4',
    },
    {
        name: 'Desk and Office 6',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        slug: 'desk-and-office-6',
    },

    {
        name: 'Travel 7',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        slug: 'travel-7',
    },
    {
        name: 'Self-Improvement 7',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        slug: 'self-mprovement-7',
    },
    {
        name: 'Travel 10',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        slug: 'travel-10',
    },
    {
        name: 'Desk and Office 8',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        slug: 'desk-and-office-8',
    },
    {
        name: 'Self-Improvement 9',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        slug: 'self-mprovement-9',
    },

]

export default function Example({ data }) {
    const router = useRouter()

    const { category } = router.query;

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {data.products.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <Link href={`${category}/${callout.slug}`}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </Link>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
