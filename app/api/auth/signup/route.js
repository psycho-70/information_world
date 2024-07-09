import { hash } from 'bcryptjs';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(req, res) {
  const { name, lastName, email, password } = await req.json();
  const { db } = await connectToDatabase();

  const existingUser = await db.collection('logindata').findOne({ email });

  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const hashedPassword = await hash(password, 10);

  const newUser = {
    name,
    lastName,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  };

  await db.collection('logindata').insertOne(newUser);

  return new Response(JSON.stringify({ message: 'User created' }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
