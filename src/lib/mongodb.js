import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mariaruiz221160:EzrRaB4W6oASsxa8@cluster0.2yaog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_MONGODB_URI"');
// }

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = { appName: "devrel.template.nextjs" };

let client;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global;

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.

export default client;