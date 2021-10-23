import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: ${(props) => props.theme.size[8]} auto;

  h2 {
    font-size: ${(props) => props.theme.size[8]};
    color: ${(props) => props.theme.colors.grey800};
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size[16]};
    }
  }
`;
