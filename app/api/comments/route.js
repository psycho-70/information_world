import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req) {
  const { db } = await connectToDatabase();

  try {
    const { text, username } = await req.json();
    const collection = db.collection('comments');
    const result = await collection.insertOne({
      text,
      username,
      createdAt: new Date(), // Add timestamp here
    });

    if (result.insertedId) {
      return new Response(JSON.stringify({ success: true, message: 'Comment added successfully', insertedId: result.insertedId }), { status: 201 });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Failed to add comment' }), { status: 500 });
    }
  } catch (error) {
    console.error('Error adding comment:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), { status: 500 });
  }
}

export async function GET(req) {
  const { db } = await connectToDatabase();

  try {
    const collection = db.collection('comments');
    const comments = await collection.find({}).sort({ createdAt: -1 }).toArray(); // Sort by latest comments
    return new Response(JSON.stringify({ success: true, comments }), { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new Response(JSON.stringify({ success: false, message: 'Server error' }), { status: 500 });
  }
}
