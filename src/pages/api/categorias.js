import mongoClient, { uri } from "../../lib/mongodb";
const { MongoClient } = require("mongodb");


export default async (req, res) => {
    const client = new MongoClient(uri);


    if (req.method === 'GET') {
        const params = req.query;

        try {
            const db = mongoClient.db("Bazzar-JJ");
            const categorieas = await db
                .collection("categorias")
                .find(params)
                .sort({ metacritic: -1 })
                .limit(100)
                .toArray();

            if (!!params.slug) {
                return res.status(200).json(categorieas[0])
            } else {
                return res.status(200).json(categorieas)
            }
        } catch (e) {
            return res.status(400).json({})
        }
    }

    if (req.method === 'POST') {

        try {
            const body = req.body

            // Connect to the Atlas cluster
            await client.connect();
            // Get the database and collection on which to run the operation
            const db = client.db("Bazzar-JJ");
            const col = db.collection("categorias");
            // Create new documents                                                                                                                                         
            const categoryDocument = [body]
            // Insert the documents into the specified collection        
            const p = await col.insertMany(categoryDocument);
            // // Find the document
            // const filter = { "name.last": "Turing" };
            // const document = await col.findOne(filter);
            // Print results
            // console.log("Document found:\n" + JSON.stringify(document));


            return res.status(200).json(p)
        } catch (err) {
            return res.status(400).json(err.stack)
        }

        finally {
            await client.close();
        }


    }
    if (req.method === 'PUT') {

        try {
            const body = req.body

            // Connect to the Atlas cluster
            await client.connect();
            // Get the database and collection on which to run the operation
            const db = client.db("Bazzar-JJ");
            const col = db.collection("categorias");
            // Create new documents                                                                                                                                         
            const categoryDocument = [body]
            // Insert the documents into the specified collection     

            const filter = { slug: body.slug };
            // update the value of the 'quantity' field to 5
            const updateDocument = {
                $set: {
                    nombre: body.nombre,
                    imagen: body.imagen,
                    type: body.type,
                    active: body.active,
                },
                $currentDate: { lastUpdated: true }
            };

            const p = await col.updateOne(filter, updateDocument);

            return res.status(200).json(p)
        } catch (err) {
            return res.status(400).json(err.stack)
        }

        finally {
            await client.close();
        }


    }


    // else {
    //     res.setHeader('Allow', ['POST']);
    //     res.status(405).end(`Method ${req.method} Not Allowed`);
    // }
}

