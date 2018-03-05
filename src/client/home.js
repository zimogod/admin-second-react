import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
class Home extends Component{
	constructor(props){
		super(props)
		console.log('');
	}
	render(){
		return (
			<div className="admin-home">
				<Link to={{ hash:'5',pathname: '/yaoyao', search:'id=5',query: { name: 'lichao' },state:{data:'hello'} }}>去紫漠大仙的丹田之地</Link>
     		{/*to=对象，带参数跳转（pathname, query, hash, state(额外数据）），
     		注意:这些参数都被存放到this.props.location中*/}
			</div>
		)
	}
}
export default Home;



