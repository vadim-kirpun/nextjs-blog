import { memo, PropsWithChildren } from 'react';

import { Wrapper } from './styles/ContentWrapper';

const ContentWrapper = ({ children }: PropsWithChildren<{}>) => (
  <Wrapper>{children}</Wrapper>
);

export default memo(ContentWrapper);
