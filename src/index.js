import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { HashRouter as Router,Route,Switch,Redirect,NavLink } from 'react-router-dom';
import Home from './client/home';
import Zimo from './client/zimo';
import News from './client/newFiles';
import store from './store/store';
//注意所有的import进行缓存的方法都在最上面
//路由4.0.0以后，将路由里面的hashHistory、Router、IndexRoute废弃，代替它的是BrowserRouter

//exact：是严格匹配路由，也就是说所有的路径于跳转的对应路径
//完全一致的情况下，才让当前所在的路由处于激活状态

// BrowserRouter浏览器的正常跳转，是一般开发时用的路由
// 跳转，而到了线上是用hash进行路由跳转(hash路由跳转
// 只是将/#/后面的路径进行了切换，相当于tab切换，
// 不会请求后台[减少http请求，提高网页性能])

//路由中要用重定向的API(Redirect)时，Redirect操作必须包含在
//Switch标签内部，用其他的标签会报错

//上面的exact表示绝对匹配路径,如果不注明exact,则还会匹配当前路径下所有的路径，如：
//首页是/index,则还会匹配/index/*。

//Switch:是选择性的加载当前唯一的路由，其他的是不会都去匹配

//NavLink:是当前选中的唯一路由，且样式会进行变化，也就是激活状态下的样式(有且只有一个)

//activeClassName：只是动态添加class类名而已

//Router 里面传入hashHistory之类的属性时，是集中的路由状态
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
	<Router>
		<Switch className="aaa">
			<Route exact path='/' component={Home} />
			<Route path='/zimo' component={Zimo} />
		</Switch>
	</Router>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
