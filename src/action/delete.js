export const DEL = 'DEL';
export const CREAT = 'CREAT';
export const PAY = 'PAY';

const deletes = delet =>{
	return {
		type:'DEL',
		payload:delet
	}
}

const userInfo = creat =>{
	return {
		type:'CREAT',
		payload:creat
	}
}

const solary = payMoney =>{
	return {
		type:'PAY',
		payload:payMoney
	}
}
