import React from 'react';
import styled from 'styled-components';

const Cell = ({ content }) => {
  const StyledCell = styled.div`
    background-color: #fff;
    padding: 5px 0;
    margin: 4px 3px;
    border-radius: 3px;
  `;
  return (
    <StyledCell>{content}</StyledCell>
  );
}
export default Cell;
