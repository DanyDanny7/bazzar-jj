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
    const results = await collection()
      .find({})
      .toArray();
    resp.status(200).json(results)
  } catch (error) {
    console.log("Error de conexión", error)
    resp.status(500).json(error)
  }
}

// let client;

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global;

//   if (!globalWithMongo._mongoClient) {
//     globalWithMongo._mongoClient = new MongoClient(uri, options);
//   }
//   client = globalWithMongo._mongoClient;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
// }

// // Export a module-scoped MongoClient. By doing this in a
// // separate module, the client can be shared across functions.

// export default client;
