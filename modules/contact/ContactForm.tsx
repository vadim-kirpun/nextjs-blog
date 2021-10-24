import { memo } from 'react';

import {
  Form,
  Actions,
  Control,
  Controls,
  StyledWrapper,
} from './styles/ContactForm';

const ContactForm = () => (
  <StyledWrapper>
    <h1>How can I help you?</h1>

    <Form>
      <Controls>
        <Control>
          <label htmlFor='email'>
            Your email
            <input type='email' id='email' />
          </label>
        </Control>

        <Control>
          <label htmlFor='password'>
            Password
            <input type='password' id='password' />
          </label>
        </Control>
      </Controls>

      <Control>
        <label htmlFor='message'>
          Your message
          <textarea id='message' rows={5} />
        </label>
      </Control>

      <Actions>
        <button type='submit'>Send message</button>
      </Actions>
    </Form>
  </StyledWrapper>
);

export default memo(ContactForm);
