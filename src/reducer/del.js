import { DEL,CREAT,PAY } from '../action/delete';

const initialState = {
	del:['张三','李四','隔壁老王'],
	solary:10000,
	pay:'overPay'
}

export let del = (state = initialState,action) =>{
	state = JSON.parse(JSON.stringify(state));//深clone
	switch(action.type){
		case DEL:
			state.del.pop();
		return Object.assign({}, state, { del:state.del });
		default:
		return state;
	}
}

export let creat = (state = initialState,action) =>{
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case CREAT:
		state.solary += 1;
		return Object.assign({}, state, { solary:state.solary });
		default:
		return state;
	}
}

export let pay = (state = initialState,action) =>{
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case PAY:
		state.pay += '-zimo';
		return Object.assign({}, state, { pay:state.pay });
		default:
		return state;
	}
}

