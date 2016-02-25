// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Home = require('./views/Home');
var Layout = require('./views/Layout');
var NotFound = require('./views/NotFound');
var Servers = require('./views/Servers');
var Messages = require('./views/Messages');
var Profile = require('./views/Profile');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />
			<Route path="servers" component={Servers} />
			<Route path="messages" component={Messages}>
				<Route path="/messages/:userId" component={NotFound} />
			</Route>
			<Route path="profile" component={Profile} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);