import { memo, useEffect, useState } from 'react';
import type { FormEvent } from 'react';

import axios from 'axios';

import { Notification } from '@components';
import type { NotificationStatus } from '@types';

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

export type ErrorResponse = {
  data: { message: string };
};

const useNotification = (
  status: NotificationStatus | null,
  errorMessage: string = ''
) => {
  type Variants = Record<
    NotificationStatus,
    { title: string; message: string | typeof errorMessage }
  >;

  const variants: Variants = {
    pending: {
      title: 'Sending message...',
      message: 'Your message is on its way!',
    },
    success: {
      title: 'Success!',
      message: 'Message sent successfully!',
    },
    error: {
      title: 'Error!',
      message: errorMessage,
    },
  };

  if (status) return variants[status];
  return null;
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [requestStatus, setRequestStatus] = useState<NotificationStatus | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const notificationData = useNotification(requestStatus, errorMessage);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorMessage(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [requestStatus]);

  const clearInputs = () => {
    setEmail('');
    setName('');
    setMessage('');
  };

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setRequestStatus('pending');

      const data = { email, name, message };
      await axios.post<SendMessageResponse>('/api/contact', data);

      setRequestStatus('success');
      clearInputs();
    } catch (error) {
      setRequestStatus('error');

      if (axios.isAxiosError(error)) {
        const { data } = error.response as ErrorResponse;
        setErrorMessage(data.message);
      }
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

      {requestStatus && notificationData && (
        <Notification
          title={notificationData.title}
          message={notificationData.message}
          status={requestStatus}
        />
      )}
    </StyledWrapper>
  );
};

export default memo(ContactForm);
