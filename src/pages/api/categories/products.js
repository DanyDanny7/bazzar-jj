import { uri } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const client = new MongoClient(uri);
    const params = req.query;
    const BD = process.env.NEXT_PUBLIC_MONTODB_DB;

    if (req.method === 'PUT') {
        try {
            const body = req.body;
            await client.connect();
            const db = client.db(BD);
            const col = db.collection("categorias");
            const filterCategory = { slug: params.slug };
            const filterProduct = { slug: body.deleted.slug };

            const updateDocument = {
                $set: { products: body.products },
                $currentDate: { lastUpdated: true }
            };

            const respCat = await col.updateOne(filterCategory, updateDocument);

            // elimina el producto excluido
            const products = db.collection("productos");
            const respProd = await products.deleteOne(filterProduct);


            return res.status(200).json({ respCat, respProd })
        } catch (err) {
            return res.status(400).json(err.stack)
        } finally {
            await client.close();
        }
    }

    else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

