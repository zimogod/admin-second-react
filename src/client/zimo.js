import React,{ Component } from 'react';
// import '../style/home.css';
class Zimo extends Component{
	constructor(props){
		super(props)
		console.log(this.props.location.state.data);
	}
	num(){
		const params  = {
			data:this.props.location.state.data
		};
		this.$http.post('/api',params).then((res)=>{
			if(this.props.location.state.data === 'hello'){
					console.log(1);
				}
			return;
		}).catch(error=>{
			console.log(error);
		});
	}
	render(){
		return (
			<div className="admin-home">
				紫漠
				{this.props.children}
			</div>
		)
	}
}
export default Zimo;



