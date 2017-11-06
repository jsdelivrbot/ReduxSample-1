import { combineReducers } from 'redux';
import { ReduerBooks } from './reducerbooks';

 
const RootReducer = combineReducers({//Wiring reducer to the function
 books:ReduerBooks
});

export default RootReducer;
