import React, { Component } from 'react';
import Column from './Column';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledAppWrapper = styled.div`
  width: 45%;
  margin: 0 auto;
  text-align: center;
`

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cells: [
        [
          { content: 1 },
          { content: 1 },
          { content: 2 },
          { content: 1 },
          { content: 0 },
        ],
        [
          { content: 2 },
          { content: 2 },
          { content: 1 },
          { content: 0 },
          { content: 2 },
        ],
        [
          { content: 1 },
          { content: 1 },
          { content: 0 },
          { content: 1 },
          { content: 0 },
        ],
      ]
    };
  }
  render() {
    return (
      <StyledAppWrapper>
        <Title>match3</Title>
        <Column cells={this.state.cells[0]} />
        <Column cells={this.state.cells[1]} />
        <Column cells={this.state.cells[2]} />
      </StyledAppWrapper>
    );
  }
}
