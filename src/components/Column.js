import React from 'react';
import Cell from './Cell';
import v4 from 'uuid';

const Column = ({ cells }) => {
  return (
    <div>
      {cells.map((cell) =>
        <Cell
          content={cell.content}
          key={v4()}
        />
      )}
    </div>
  );
};
export default Column;
