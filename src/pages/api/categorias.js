import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    const { slug } = req.query;

    const search = slug ? { slug } : {};

    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONTODB_DB);
        const categorieas = await db
            .collection("categorias")
            .find(search)
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        if (!!slug) {
            console.log("search")
            res.json(categorieas[0]);
        } else {
            console.log("no-search")
            res.json(categorieas);
        }
    } catch (e) {
        console.error(e);
    }
}