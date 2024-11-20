import last from "lodash/last";
import get from "lodash/get";
import map from "lodash/map";
import toString from "lodash/toString";
import dynamic from 'next/dynamic';

const ShopByCategory = dynamic(() => import('./ShopByCategory'), { ssr: false });
const Type_1 = dynamic(() => import('./Type_1'), { ssr: false });
const Type_2 = dynamic(() => import('./Type_2'), { ssr: false });
const Type_3 = dynamic(() => import('./Type_3'), { ssr: false });
const Welcome = dynamic(() => import('./Welcome'), { ssr: false });

const Dashboard = ({ data }) => (
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bazar Fashion JJ</h2>
                <p className="mt-4 text-gray-500">
                    ¡Bienvenido a Bazar Fashion JJ! Descubre una amplia selección de ropa y zapatos para cualquier ocasión.
                     Desde las últimas tendencias hasta los clásicos atemporales, encontrarás todo lo que necesitas para expresar
                      tu estilo.<br/> <strong>¡Compra ahora y disfruta de envío gratis en pedidos superiores a $50.00!</strong>
                </p>
            </div>
            <ShopByCategory categories={data} />

            {map(data, (category) => {
                switch (toString(get(category, "type", 0))) {
                    case "Tarjeta": return <Type_1 category={category} />;
                    case "Carrusel": return <Type_2 category={category} />;
                    case "Banner": return <Type_3 category={category} />;
                    default: return <Type_1 category={category} />;
                }
            })}
        </div>
        <Welcome product={last(get(last(data), "products"))} category={last(data)} />
    </div>
)

export default Dashboard;