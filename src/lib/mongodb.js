if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

export const uri = process.env.MONGODB_URI;
export const options = {};

