import { memo, PropsWithChildren } from 'react';

import { StyledTitle } from './styles/Title';

const Title = ({ children }: PropsWithChildren<{}>) => (
  <StyledTitle>{children}</StyledTitle>
);

export default memo(Title);
