import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import CEO from "@/components/util/CEO";

export default function Page404() {
    const router = useRouter();
    const { from } = router.query;

    return (

        <div className="min-h-full">
            <CEO
                title="404 No Found"
                description={""}
                image={`${process.env.NEXT_PUBLIC_API_URL}/cover.jpeg`}
            />
            <Layout>
                <main className="grid place-items-center bg-white px-6 py-10 sm:py-10 lg:px-8">
                    <div className="text-center">
                        <p className="text-base font-semibold text-indigo-600">404</p>
                        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                            Pagina no encontrada
                        </h1>
                        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
                            dangerouslySetInnerHTML={{ __html: `Lo sentimos pero no pudimos encontrar la página <strong>"${from || ""}"</strong>` }} />
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ir al inicio
                            </Link>
                        </div>
                    </div>
                </main>
            </Layout>
        </div>
    )
}
