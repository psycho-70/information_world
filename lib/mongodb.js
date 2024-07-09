import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);

    await client.connect();
  }

  const db = client.db('information_world');
  return { db, client };
}
