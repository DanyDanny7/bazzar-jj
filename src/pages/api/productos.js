import { options, uri } from "../../lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const { slug } = req.query;
    const search = slug ? { slug } : {};

    try {
        const mongoClient = await (new MongoClient(uri, options)).connect();
        const db = mongoClient.db("Bazzar-JJ");
        const productos = await db
            .collection("productos")
            .find(search)
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        if (!!slug) {
            res.json(productos[0]);
        } else {
            res.json(productos);
        }

    } catch (e) {
        console.error(e);
    }
}
