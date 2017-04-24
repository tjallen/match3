// action types
export const SWAP_CELLS = 'SWAP_CELLS';
export const CLEAR_CELL = 'CLEAR_CELL';
export const FILL_CELL = 'FILL_CELL';

// action creators

function generateRandomCellContents() {
  return Math.round(Math.random() * 3);
}

export function swapCells(srcX, srcY, destX, destY) {
  return { type: SWAP_CELLS, srcX, srcY, destX, destY };
}

export function fillCell(x, y) {
  return { type: FILL_CELL, x, y, content: generateRandomCellContents() };
}

export function clearCell(x, y) {
  return { type: CLEAR_CELL, x, y };
}
