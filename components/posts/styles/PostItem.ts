import styled from 'styled-components';

export const ListItem = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colors.grey800};
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.grey100};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.size[4]};

  h3 {
    margin: ${(props) => props.theme.size[2]} 0;
    font-size: ${(props) => props.theme.size[6]};
  }

  time {
    font-style: italic;
    color: ${(props) => props.theme.colors.grey300};
  }

  p {
    line-height: ${(props) => props.theme.size[6]};
  }
`;
