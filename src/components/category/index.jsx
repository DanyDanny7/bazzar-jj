import Link from "next/link";
import { useRouter } from 'next/router';

export default function Example({ data }) {
    const router = useRouter()
    const { category } = router.query;

    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
                    <h2 className="text-2xl font-bold text-gray-900">{data.nombre}</h2>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-y-0 lg:gap-y-8">
                        {data?.products?.map((product) => (
                            <div key={product.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm text-gray-500">
                                    <Link href={`${category}/${product.slug}`}>
                                        <span className="absolute inset-0" />
                                        <div className="text-lg text-black font-semibold">{product.name}</div>
                                    </Link>
                                </h3>
                                <p className="text-base text-gray-600 line-clamp-3 leading-[1.2]">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
