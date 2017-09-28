import { combineReducers } from 'redux';
import { ReduerBooks } from './reducer-books';


const rootReducer = combineReducers({
 books:ReduerBooks
});

export default rootReducer;
