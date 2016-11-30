import React from 'react';
import Cell from './Cell';
import v4 from 'uuid';
import styled from 'styled-components';

const Column = ({cells, ...rest}) => {
  const StyledColumn = styled.div`
  display: inline;
  width: 33%;
  float: left;
  `;
  return (
      <StyledColumn>
        {cells.map((cell) =>
          <Cell
            {...rest}
            content={cell.content}
            x={cell.x}
            y={cell.y}
            key={v4()}
          />
        )}
      </StyledColumn>
  );
};
export default Column;
