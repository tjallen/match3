import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    return (
      <div>
        Board ({this.props.cells ? this.props.cells.length : '0'} cells)
        {
          /*
            {cells.map((col) =>
              <Column
                cells={col}
                key={v4()}
                onClick={this.cellInteract.bind(this)}
                interacted={interacted}
              />
            )}
          */
        }

      </div>
    );
  }
}