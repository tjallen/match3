import React from 'react';
import styled from 'styled-components';

const Cell = ({ content, onClick, x, y, interacted }) => {
  const isInteracted = interacted[0] === x && interacted[1] === y;
  const StyledCell = styled.div`
    background-color: ${!isInteracted ? '#fff' : 'palevioletred'};
    padding: 5px 0;
    margin: 4px 3px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: rebeccapurple;
    }
  `;
  return (
    <StyledCell
      onClick={() => onClick(x, y)}
    >
      {content}
    </StyledCell>
  );
}
export default Cell;
