import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
import Category4 from "./Category4";
import Welcome from "./Welcome";


export default function Example() {
    return (
        <div id="contenido" className="bg-white">
            <div aria-hidden="true" className="relative">
                <img
                    alt=""
                    src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-02-full-width.jpg"
                    className="h-96 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
            </div>

            <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                    <p className="mt-4 text-gray-500">
                        Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
                        meticulously arrange items into dedicated trays.
                    </p>
                </div>

                <Category1 />
                <Category2 />
                <Category3 />
                <Category4 />
            </div>
            <Welcome />
        </div>
    )
}
