// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const data = await fs.readFile(process.cwd() + '/public/products.json', 'utf8');

  const { slug } = req.query

  const products = JSON.parse(data);

  const product = products.find((product) => product.slug === slug);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400).json({});
  }
}
