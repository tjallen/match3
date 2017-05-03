import { connect } from 'react-redux';
import Board from './Board';
import { cellInteract } from '../actions';

const mapStateToProps = (state) => {
  return {
    cells: state.cells
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (x, y) => {
      dispatch(cellInteract(x, y));
    }
  }
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;


