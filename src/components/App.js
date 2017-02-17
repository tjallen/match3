import React, { Component } from 'react';
import Column from './Column';
import styled from 'styled-components';
import v4 from 'uuid';

const StyledAppWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      interacted: null,
      rows: 5,
      cols: 3,
      cells: [],
    };
  }
  componentDidMount() {
    this.populateGrid();
  }
  populateGrid() {
    const { cols, rows } = this.state;
    const cells = [];
    for (let y = 0; y < cols; y++) {
      cells.push([]);
      for (let x = 0; x < rows; x++) {
        cells[y].push({
          content: this.generateCellContents(),
          x: y,
          y: x,
        });
      }
    }
    this.setState({
      cells,
    });
  }
  generateCellContents() {
    return Math.round(Math.random() * 3);
  }
  cellInteract(x, y) {
    const { interacted } = this.state;
    this.setState({
      interacted: {
        x,
        y,
      },
    });
    if (interacted) {
      this.swapCells(interacted.x, interacted.y, x, y);
    }
  }
  swapCells(sX, sY, dX, dY) {
    let { cells } = this.state;
    /*
    swap source content property with destination content property w/ array destructuring:
    https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
    */
    [ cells[sX][sY].content, cells[dX][dY].content ] = [ cells[dX][dY].content, cells[sX][sY].content ];
    this.setState({
      cells,
      interacted: null,
    });
  }
  validateSwap(src, dest) {
    console.log('validate potential swap');
    return true;
  }
  render() {
    const { cells, interacted } = this.state;
    return (
      <StyledAppWrapper>
        <Title>match3</Title>
        {cells.map((col) =>
          <Column
            cells={col}
            key={v4()}
            onClick={this.cellInteract.bind(this)}
            interacted={interacted}
          />
        )}
      </StyledAppWrapper>
    );
  }
}
