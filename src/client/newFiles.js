import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
// import '../style/home.css';
class News extends Component{
	constructor(props){
		super(props)
		console.log(this.props.location.state);
	}
	render(){
		return (
			<div className="admin-home">
				新的
			</div>
		)
	}
}
export default News;



