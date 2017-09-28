import { combineReducers } from 'redux';
import { ReduerBooks } from './reducerbooks';

 
const RootReducer = combineReducers({
    
 books:ReduerBooks
});

export default RootReducer;
