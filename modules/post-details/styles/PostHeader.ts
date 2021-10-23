import Image from 'next/image';

import styled from 'styled-components';

export const Header = styled.header`
  padding-bottom: ${(props) => props.theme.size[8]};
  border-bottom: 8px solid ${(props) => props.theme.colors.primary100};
  margin: ${(props) => props.theme.size[4]} 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    margin: ${(props) => props.theme.size[8]} 0;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const PostTitle = styled.h1`
  font-size: ${(props) => props.theme.size[8]};
  color: ${(props) => props.theme.colors.primary500};
  margin: 0;
  line-height: initial;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size[16]};
    text-align: left;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 200px;
  height: 120px;
`;
