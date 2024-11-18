import { uri } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const client = new MongoClient(uri);
    const params = req.query;

    const BD = process.env.NEXT_PUBLIC_MONTODB_DB;

    if (req.method === 'GET') {

        try {
            await client.connect();
            const db = client.db(BD);
            const categorieas = await db
                .collection("productos")
                .find(params)
                .sort({ metacritic: -1 })
                .limit(100)
                .toArray();

            if (!!params.slug) {
                return res.status(200).json(categorieas[0])
            } else {
                return res.status(200).json(categorieas)
            }
        } catch (e) {
            return res.status(400).json({})
        } finally {
            await client.close();
        }
    }

    else if (req.method === 'POST') {

        try {
            const body = req.body
            await client.connect();
            const db = client.db(BD);
            const products = db.collection("productos");
            const respProducts = await products.insertMany(body);

            if (body.length > 0) {
                // Agrega el detalle de los productos añadidos a la categoría
                const categories = db.collection("categorias");
                const filterCategory = { slug: body[0].category };

                const category = await db.collection("categorias")
                    .find(filterCategory)
                    .sort({ metacritic: -1 })
                    .limit(100)
                    .toArray();

                const oldProducts = category[0].products;
                const newProducts = body.map((product) => ({
                    slug: product.slug,
                    name: product.name,
                    code: product.code,
                    price: product.price,
                    imageSrc: product.images.find(({ primary }) => primary).imageSrc,
                    imageAlt: product.images.find(({ primary }) => primary).imageAlt,
                    description: product.description,
                }))

                const updateCategory = {
                    $set: {
                        products: [...oldProducts, ...newProducts],
                    },
                    $currentDate: { lastUpdated: true }
                };

                await categories.updateOne(filterCategory, updateCategory);
            }

            return res.status(200).json(respProducts)
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }


    }
    else if (req.method === 'PUT') {

        try {
            const body = req.body;
            await client.connect();
            const db = client.db(BD);
            const col = db.collection("productos");
            const filter = { slug: body.slug };
            const updateDocument = {
                $set: {
                    nombre: body.nombre,
                    imagen: body.imagen,
                    type: body.type,
                    active: body.active,
                },
                $currentDate: { lastUpdated: true }
            };

            const resp = await col.updateOne(filter, updateDocument);

            return res.status(200).json(resp)
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }
    }

    else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

