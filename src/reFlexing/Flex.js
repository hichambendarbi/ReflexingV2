import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
`;

export const Flex = ({ children, row }) => (
  <BoxContainer row={row}>{children}</BoxContainer>
);
