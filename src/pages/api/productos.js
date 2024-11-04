import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    const { slug } = req.query;

    const search = slug ? { slug } : {};

    try {
        const client = await clientPromise;
        const db = client.db(process.env.NEXT_PUBLIC_MONTODB_DB);
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
