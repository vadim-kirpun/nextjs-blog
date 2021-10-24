import styled from 'styled-components';

import { ContentWrapper } from '@components';

export const StyledWrapper = styled(ContentWrapper)`
  border-radius: 6px;
  padding: ${(props) => props.theme.size[4]};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: ${(props) => props.theme.size[6]};
  background-color: ${(props) => props.theme.colors.grey100};

  h1 {
    font-size: ${(props) => props.theme.size[8]};
    margin: ${(props) => props.theme.size[4]} 0;
    text-align: left;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size[16]};
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  label {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    margin-top: ${(props) => props.theme.size[2]};
  }

  input,
  textarea {
    font: inherit;
    margin-top: ${(props) => props.theme.size[1]};
    padding: ${(props) => props.theme.size[1]};
    border-radius: 4px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.grey400};
    background-color: ${(props) => props.theme.colors.grey50};
    resize: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary700};
    border: 1px solid ${(props) => props.theme.colors.primary700};
    padding: ${(props) => props.theme.size[2]} ${(props) => props.theme.size[4]};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.primary50};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: ${(props) => props.theme.colors.primary500};
      border-color: ${(props) => props.theme.colors.primary500};
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

export const Control = styled.div`
  flex: 1;
  min-width: 10rem;
`;

export const Actions = styled.div`
  margin-top: ${(props) => props.theme.size[4]};
  text-align: right;
`;
