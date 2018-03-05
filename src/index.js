import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter,Route } from 'react-router-dom';
import Home from './client/home';
import Zimo from './client/zimo';
//注意所有的import进行缓存的方法都在最上面
//路由4.0.0以后，将路由里面的hashHistory、Router、IndexRoute废弃，代替它的是BrowserRouter

//exact：是严格匹配路由，也就是说所有的路径于跳转的对应路径
//完全一致的情况下，才让当前所在的路由显示高亮状态

// BrowserRoute浏览器的正常跳转，是一般开发时用的路由
// 跳转，而到了线上是用hash进行路由跳转(hash路由跳转
// 只是将/#/后面的路径进行了切换，相当于tab切换，
// 不会请求后台[减少http请求，提高网页性能])

//Router 里面传入hashHistory之类的属性时，是集中的路由状态
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(	
	<HashRouter>
		<div className="aaa">
			<Route exact path='/' component={Home} />
			<Route path='/zimo' component={Zimo} />
		</div>
	</HashRouter>,
	 document.getElementById('root')
);
registerServiceWorker();
