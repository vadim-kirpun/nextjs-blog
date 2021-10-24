import { memo, PropsWithChildren } from 'react';

import { Wrapper } from './styles/ContentWrapper';

type Props = PropsWithChildren<{ className?: string }>;

const ContentWrapper = ({ children, className = '' }: Props) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default memo(ContentWrapper);
