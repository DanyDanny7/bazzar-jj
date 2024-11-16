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
                src="https://i.pinimg.com/736x/63/03/84/6303846a344c887ec462d3dee0c828fb.jpg"
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
            <ShopByCategory categories={data} />

            {map(data, (category) => {
                switch (toString(get(category, "type", 0))) {
                    case "1": return <Type_1 category={category} />;
                    case "2": return <Type_2 category={category} />;
                    case "3": return <Type_3 category={category} />;
                    default: return <Type_1 category={category} />;
                }
            })}
        </div>
        <Welcome product={last(get(last(data), "products"))} category={last(data)} />
    </div>
)

export default Dashboard;