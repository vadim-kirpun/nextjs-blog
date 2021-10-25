import { memo } from 'react';

import { NotificationStatus } from '@types';

import { Wrapper, SuccessWrapper, ErrorWrapper } from './styles/Notification';

interface Props {
  title: string;
  message: string;
  status: NotificationStatus;
}

const wrappers = {
  success: SuccessWrapper,
  pending: Wrapper,
  error: ErrorWrapper,
};

const Notification = (props: Props) => {
  const { title, message, status } = props;

  const NotificationWrapper = wrappers[status];

  return (
    <NotificationWrapper>
      <h2>{title}</h2>
      <p>{message}</p>
    </NotificationWrapper>
  );
};

export default memo(Notification);
