import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

export default async function handler(req, resp) {
    try {
        const mongoClient = await (new MongoClient(uri, options)).connect();
        console.log("Conectados !")


        const db = mongoClient.db("Bazzar-JJ");
        const collection = db.collection("productos")
        const results = await collection
            .find({})
            .toArray();
        resp.status(200).json(results)
    } catch (error) {
        console.log("Error de conexión", error)
        resp.status(500).json(error)
    }
}
