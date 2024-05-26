// styled/Grid.js
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.gap || "1.5rem"};
  padding: ${(props) => props.padding || "1rem"};
`;

export default Grid;
