import styled from 'styled-components';

export const Wrapper = styled.section`
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.grey900},
    ${(props) => props.theme.colors.grey800}
  );
  padding: ${(props) => props.theme.size[8]} 0;

  h1 {
    font-size: ${(props) => props.theme.size[16]};
    margin: ${(props) => props.theme.size[4]} 0;
    color: ${(props) => props.theme.colors.grey300};
  }

  p {
    font-size: ${(props) => props.theme.size[6]};
    color: ${(props) => props.theme.colors.grey200};
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.grey700};
  margin: auto;

  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;
