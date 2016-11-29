import React, { Component } from 'react';
import Column from './Column';

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
          { content: 0 },
          { content: 2 },
          { content: 0 },
          { content: 1 },
          { content: 0 },
        ],
        [
          { content: 1 },
          { content: 1 },
          { content: 0 },
          { content: 1 },
          { content: 2 },
        ],
      ]
    };
  }
  render() {
    return (
      <div>
        <Column cells={this.state.cells[0]} />
        <Column cells={this.state.cells[1]} />
        <Column cells={this.state.cells[2]} />
      </div>
    );
  }
}
