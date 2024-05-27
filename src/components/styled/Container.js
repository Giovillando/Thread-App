// styled/Container.js
import styled from "styled-components";

const Container = styled.div`
  padding: ${(props) => props.padding || "1.5rem"};
  margin: ${(props) => props.margin || "0 auto"};
  max-width: ${(props) => props.maxWidth || "100%"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Container;
