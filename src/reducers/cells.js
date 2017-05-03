import { SWAP_CELLS, CLEAR_CELL, FILL_CELL, POPULATE_BOARD } from '../actions';

const initialState = {
  cells: [], // for these reducers
  rows: 5, // settings reducer?
  cols: 3, // settings reducer?
  interacted: null, // status reducer?
}

const cell = (state, action) => {
  switch (action.type) {
    case CLEAR_CELL: {
      // (x, y)
      return state // clear specified cell using .slice()
    }
    case FILL_CELL: {
      // (x, y)
      return state // fill specified cell - use concat or array spread
    }
    default:
      return state;
  }
}

function cells(state = initialState, action) {
  switch (action.type) {
    // sample action: { type: SWAP_CELLS, srcX, srcY, destX, destY }
    case SWAP_CELLS: {
      const cells = state.slice();
      const cachedSource = cells[action.srcX][action.srcY];
      cells[action.srcX][action.srcY] = cells[action.destX][action.destY];
      cells[action.destX][action.destY] = cachedSource; 
      return cells;
    }
    case POPULATE_BOARD: {
      return state.cells.map(i => {
        return cell(i, action);
      });
    }
    default:
      return state;
  }
}

export default cells;