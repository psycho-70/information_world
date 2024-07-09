import { MongoClient } from "mongodb";
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI;
let client;
let collection;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db("information_world");
    collection = db.collection("feedback");
  }
}

export async function POST(req) {
  await connectToDatabase();

  try {
    const { name, email, message } = await req.json();
    const feedback = { name, email, message };
    await collection.insertOne(feedback);
    return NextResponse.json({ message: "Feedback submitted successfully" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error submitting feedback" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
