import { combineReducers } from 'redux';
import cells from './cells';

const match3 = combineReducers({
  cells,
});

export default match3;