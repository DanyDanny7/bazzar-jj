import mongoClient from "../../lib/mongodb";

export default async (req, res) => {
    const { slug } = req.query;
    const search = slug ? { slug } : {};

    try {
        const db = mongoClient.db("Bazzar-JJ");
        const categorieas = await db
            .collection("categorias")
            .find(search)
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        if (!!slug) {
            return res.status(200).json(categorieas[0])
        } else {
            return res.status(200).json(categorieas)
        }
    } catch (e) {
        return res.status(400).json({})
    }
}