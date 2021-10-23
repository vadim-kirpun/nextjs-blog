import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colors.grey900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 ${(props) => props.theme.size[4]};
  }

  a {
    color: ${(props) => props.theme.colors.grey100};
    font-size: ${(props) => props.theme.size[4]};
  }

  a:hover,
  a:active,
  a.active {
    color: ${(props) => props.theme.colors.grey200};
  }

  @media (min-width: 768px) {
    ul {
      gap: 0.5rem;
    }

    a {
      font-size: ${(props) => props.theme.size[5]};
    }
  }
`;

export const Logo = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.size[5]};
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  color: ${(props) => props.theme.colors.grey50};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size[8]};
  }
`;
