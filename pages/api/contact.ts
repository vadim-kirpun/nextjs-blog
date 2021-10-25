import { NextApiRequest, NextApiResponse } from 'next';

import type { Db, MongoClient } from 'mongodb';

import { connectToDB } from '@lib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    const isEmailValid = email?.includes('@');
    const isNameValid = Boolean(name?.trim());
    const isMessageValid = Boolean(message?.trim());

    if (!isEmailValid || !isNameValid || !isMessageValid) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    let client: MongoClient;
    let db: Db;

    try {
      ({ client, db } = await connectToDB());
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      await db.collection('messages').insertOne(newMessage);
      res.status(201).json({ message: 'Successfully stored message!' });
    } catch (error) {
      res.status(500).json({ message: 'Storing message failed!' });
    } finally {
      await client.close();
    }
  }
};
