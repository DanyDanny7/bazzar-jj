// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const data = await fs.readFile(process.cwd() + '/public/categories.json', 'utf8');

  const { slug } = req.query

  const categories = JSON.parse(data);

  const category = categories.find((category) => category.slug === slug);

  if (category) {
    res.status(200).json(category);
  } else {
    res.status(400).json({});
  }
}
