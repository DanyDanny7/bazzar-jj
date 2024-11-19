import { uri } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const client = new MongoClient(uri);
    const { slug, active } = req.query

    const BD = process.env.NEXT_PUBLIC_MONTODB_DB;
    await client.connect();
    const db = client.db(BD);

    if (req.method === 'GET') {
        try {
            const category = await db
                .collection("categorias")
                .find({ slug, active })
                .toArray();
            return res.status(200).json(category[0])
        } catch (e) {
            return res.status(400).json({})
        } finally {
            await client.close();
        }
    }

    else {
        await client.close();
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

