import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import '../style/home.css';
class Zimo extends Component{
	constructor(props){
		super(props)
		console.log(this.props.location.state);
	}
	render(){
		return (
			<div className="admin-home">
				
				紫漠
				<Btn />
			</div>
		)
	}
};
export default Zimo;

class Btn extends Component{
	render(){
		return <div>公共组件</div>
	}
};


