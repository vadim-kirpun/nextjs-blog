import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${(props) => props.theme.size[8]};
  color: ${(props) => props.theme.colors.grey800};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size[16]};
  }
`;
