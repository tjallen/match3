import React from 'react';
import styled from 'styled-components';

const Cell = ({ content, onClick, x, y }) => {
  const StyledCell = styled.div`
    background-color: #fff;
    padding: 5px 0;
    margin: 4px 3px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background-color: rebeccapurple;
      color: #fff;
    }
  `;
  return (
    <StyledCell
      onClick={onClick}
    >
      {content}
    </StyledCell>
  );
}
export default Cell;
