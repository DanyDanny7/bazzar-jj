import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const { slug } = req.query

  try {
    const client = await clientPromise;
    const db = client.db(process.env.NEXT_PUBLIC_MONTODB_DB);
    const productos = await db
      .collection("productos")
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
    res.json(productos);
  } catch (error) {
    console.log(error)
    res.status(400).json({
      isError: true,
      error: error,
      msg: "No se pudo obtener los datos"
    });
  }
}
