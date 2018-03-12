import { combineReducers } from 'redux';
import { del,creat,pay } from './del';
const reducer = combineReducers({
	del,
	creat,
	pay
});

export default reducer;