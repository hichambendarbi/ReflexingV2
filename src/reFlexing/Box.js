import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  flex: 1;
  background-color: red;
  width: ${props => props.width};
  width: ${props => props.width};
  grow: ${props => props.grow};
  shrink: ${props => props.shrink};
  basis: ${props => props.basis};
  order: ${props => props.order};
  self: ${props => props.self};

  ${props => props.css}
`;

export const Box = ({
  children,
  css,
  grow,
  shrink,
  basis,
  order,
  flex,
  width,
  self
}) => (
  <StyledElement
    css={css}
    grow={grow}
    shrink={shrink}
    basis={basis}
    order={order}
    flex={flex}
    self={self}
    width={width}
  >
    {children}
  </StyledElement>
);
