import { uri } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const client = new MongoClient(uri);
    const params = req.query;

    const BD = process.env.NEXT_PUBLIC_MONTODB_DB;
    await client.connect();
    const db = client.db(BD);

    if (req.method === 'GET') {
        try {
            const categories = await db
                .collection("categorias")
                .find(params)
                .toArray();
            return res.status(200).json(categories)
        } catch (e) {
            return res.status(400).json({})
        } finally {
            await client.close();
        }
    }

    else if (req.method === 'POST') {
        try {
            const body = req.body
            const categories = db.collection("categorias");
            const respCategries = await categories.insertOne(body);
            return res.status(200).json(respCategries)
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }

    }

    else if (req.method === 'PUT') {
        try {
            const body = req.body;
            const categories = db.collection("categorias");
            const filter = { slug: params.slug };
            const updateDocument = {
                $set: body,
                $currentDate: { lastUpdated: true }
            };
            const resp = await categories.updateOne(filter, updateDocument);
            return res.status(200).json(resp)
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }
    }

    else if (req.method === 'DELETE') {
        try {
            const { slug } = params;
            const categories = db.collection("categorias");
            const respCat = await categories.deleteOne({ slug });
            // elimina masivamente los productos asocialdos a la categoría
            const products = db.collection("productos");
            const respProd = await products.deleteMany({ category: slug });

            return res.status(200).json({ respCat, respProd })
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }
    }

    else {
        await client.close();
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

