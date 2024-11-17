import mongoClient, { uri } from "../../lib/mongodb";
const { MongoClient } = require("mongodb");

export default async (req, res) => {
    const client = new MongoClient(uri);
    const params = req.query;

    if (req.method === 'GET') {

        try {
            const db = mongoClient.db("Bazzar-JJ");
            const categorieas = await db
                .collection("categorias")
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
            // Connect to the Atlas cluster
            await client.connect();
            // Get the database and collection on which to run the operation
            const db = client.db("Bazzar-JJ");
            const col = db.collection("categorias");
            // Create new documents                                                                                                                                         
            const p = await col.insertOne(body);

            return res.status(200).json(p)
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
            const col = db.collection("categorias");
            const filter = { slug: params.slug };
            const updateDocument = {
                $set: body,
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
    else if (req.method === 'DELETE') {

        try {
            const { slug } = params;
            await client.connect();
            const db = client.db("Bazzar-JJ");
            const col = db.collection("categorias");
            const respCat = await col.deleteOne({ slug });

            // elimina masivamente los productos asocialdos a la categoría
            const products = db.collection("productos");
            const respProd = await products.deleteMany({ category: slug });


            return res.status(200).json({ respCat, respProd })
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

