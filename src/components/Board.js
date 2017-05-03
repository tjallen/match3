import React, { Component } from 'react';

export default class Board extends Component {
  render() {
    return (
      <div>
        Board ({this.props.cells.length} cells)
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