import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Zimo extends Component{
	constructor(props){
		super(props)
		console.log('');
	}
	render(){
		console.log(this.props);
		const { pay,del,solary,deleteWang,changeSolary,connectString } = this.props;
		return (
			<div className="admin-home">
				{
					del.map((item,index)=>{
						return (
							<div key={index}>
								{item}
							</div>
						)
					})
				}
				<button onClick={()=>deleteWang()}>删除老王</button>
				<br/>					
					{ solary }
				<br/>
				<button onClick={()=>changeSolary()}>薪水</button>
				<br/>
					{ pay }
				<br/>
				<button onClick={()=>connectString()}>拼接字符串</button>
			</div>
		)
	}
};
function popArray(state){
	console.log(state);
	return {
		del:state.del.del,
		solary:state.creat.solary,
		pay:state.pay.pay
	}
}

function popDispatch(dispatch){
	return {
		deleteWang:()=>dispatch({type:'DEL'}),
		changeSolary:()=>dispatch({type:'CREAT'}),
		connectString:()=>dispatch({type:'PAY'})
	}
}

export default connect(
	popArray,
	popDispatch
)(Zimo);



