import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: Column;
  flex-grow: 0;
`;
export const Flex = ({ children }) => <BoxContainer>{children}</BoxContainer>;
