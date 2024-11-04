import { options, uri } from "../../lib/mongodb";
import { MongoClient } from "mongodb";

export default async (req, res) => {
    const { slug } = req.query;
    const search = slug ? { slug } : {};

    try {
        const mongoClient = await (new MongoClient(uri, options)).connect();
        const db = mongoClient.db("Bazzar-JJ");
        const categorieas = await db
            .collection("categorias")
            .find(search)
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        if (!!slug) {
            res.json(categorieas[0]);
        } else {
            res.json(categorieas);
        }
    } catch (e) {
        console.error(e);
    }
    res.json({});
}