import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.grey100};
  background-color: ${(props) => props.theme.colors.grey800};
  padding: 0 ${(props) => props.theme.size[8]};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 5rem;
  bottom: 0;
  width: 100%;
  left: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  h2 {
    font-size: ${(props) => props.theme.size[6]};
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const SuccessWrapper = styled(Wrapper)`
  color: ${(props) => props.theme.colors.grey800};
  background-color: ${(props) => props.theme.colors.success500};
`;

export const ErrorWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.error500};
`;
