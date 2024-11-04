import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    // const { slug } = req.query;

    // const search = slug ? { slug } : {};

    // try {
    //     const client = await clientPromise;
    //     const db = client.db("Bazzar-JJ");
    //     const categorieas = await db
    //         .collection("categorias")
    //         .find(search)
    //         .sort({ metacritic: -1 })
    //         .limit(100)
    //         .toArray();

    //     if (!!slug) {
    //         res.json(categorieas[0]);
    //     } else {
    //         res.json(categorieas);
    //     }
    // } catch (e) {
    //     console.error(e);
    // }
    res.json({});
}