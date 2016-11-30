import React from 'react';
import Cell from './Cell';
import v4 from 'uuid';
import styled from 'styled-components';

const Column = ({ cells, onClick }) => {
  const StyledColumn = styled.div`
  display: inline;
  width: 33%;
  float: left;
  `;
  return (
      <StyledColumn>
        {cells.map((cell) =>
          <Cell
            content={cell.content}
            key={v4()}
            onClick={onClick}
          />
        )}
      </StyledColumn>
  );
};
export default Column;
