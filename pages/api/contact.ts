import { NextApiRequest, NextApiResponse } from 'next';

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

    const newMessage = {
      email,
      name,
      message,
    };

    console.log('%c newMessage =', 'color: lightblue', newMessage);

    res.status(201).json({ message: 'Successfullt stored message!' });
  }
};
