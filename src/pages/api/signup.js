// src/pages/api/signup.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const db = client.db();
      const collection = db.collection('signups');
      await collection.insertOne(req.body);
      res.status(200).json({ message: 'Signup successful!' });
    } catch (error) {
      res.status(500).json({ message: 'Signup failed.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
