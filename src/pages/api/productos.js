import mongoClient, { uri } from "../../lib/mongodb";
import { MongoClient } from "mongodb";

// export default async (req, res) => {
//     const { slug } = req.query;
//     const search = slug ? { slug } : {};

//     try {
//         const mongoClient = await (new MongoClient(uri, options)).connect();
//         const db = mongoClient.db("Bazzar-JJ");
//         const productos = await db
//             .collection("productos")
//             .find(search)
//             .sort({ metacritic: -1 })
//             .limit(100)
//             .toArray();

//         if (!!slug) {
//             return res.status(200).json(productos[0])
//         } else {
//             return res.status(200).json(productos)
//         }

//     } catch (e) {
//         return res.status(400).json({})
//     }
// }



export default async (req, res) => {
    const client = new MongoClient(uri);
    const params = req.query;

    if (req.method === 'GET') {

        try {
            const db = mongoClient.db("Bazzar-JJ");
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
        }
    }

    else if (req.method === 'POST') {

        try {
            const body = req.body
            await client.connect();
            const db = client.db("Bazzar-JJ");
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

                console.log(category)
                console.log({ newProducts })

                const updateCategory = {
                    $set: {
                        products: [...oldProducts, ...newProducts],
                    },
                    $currentDate: { lastUpdated: true }
                };




                const respCat = await categories.updateOne(filterCategory, updateCategory);
                console.log({ respCat })
            }

            return res.status(200).json(respProducts)
        } catch (err) {
            return res.status(400).json(err.stack)
        }

        finally {
            await client.close();
        }


    }
    else if (req.method === 'PUT') {

        try {
            const body = req.body;
            await client.connect();
            const db = client.db("Bazzar-JJ");
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
        }

        finally {
            await client.close();
        }
    }

    else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

