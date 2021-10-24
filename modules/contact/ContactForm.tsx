import { memo, useState } from 'react';
import type { FormEvent } from 'react';

import axios from 'axios';

import {
  Form,
  Actions,
  Control,
  Controls,
  StyledWrapper,
} from './styles/ContactForm';

interface SendMessageResponse {
  message: string;
}

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await axios.post<SendMessageResponse>('/api/contact', {
        email,
        name,
        message,
      });
      console.log('%c data.message =', 'color: lightblue', data.message);
    } catch (error) {
      console.log('error --> ', error);
    }
  };

  return (
    <StyledWrapper>
      <h1>How can I help you?</h1>

      <Form onSubmit={sendMessageHandler}>
        <Controls>
          <Control>
            <label htmlFor='email'>
              Your email
              <input
                required
                id='email'
                type='email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
          </Control>

          <Control>
            <label htmlFor='name'>
              Your name
              <input
                required
                id='name'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
          </Control>
        </Controls>

        <Control>
          <label htmlFor='message'>
            Your message
            <textarea
              rows={5}
              id='message'
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
          </label>
        </Control>

        <Actions>
          <button type='submit'>Send message</button>
        </Actions>
      </Form>
    </StyledWrapper>
  );
};

export default memo(ContactForm);
