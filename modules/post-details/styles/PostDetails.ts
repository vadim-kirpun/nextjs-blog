import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: ${(props) => props.theme.size[8]} auto;
  font-size: ${(props) => props.theme.size[5]};
  line-height: ${(props) => props.theme.size[8]};
  background-color: ${(props) => props.theme.colors.grey100};
  border-radius: 6px;
  padding: ${(props) => props.theme.size[4]};

  p {
    color: ${(props) => props.theme.colors.grey800};
  }

  @media (min-width: 768px) {
    padding: ${(props) => props.theme.size[8]};
  }
`;
