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

var Organizations = require('./views/Organizations');
var Events = require('./views/Events');
var Servers = require('./views/Servers');
var Teams = require('./views/Teams');
var Matches = require('./views/Matches');
var Players = require('./views/Players');

var Profile = require('./views/Profile');
var Messages = require('./views/Messages');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />

			<Route path="orgs" component={Organizations} />
			<Route path="events" component={Events} />
			<Route path="servers" component={Servers} />
			<Route path="teams" component={Teams} />
			<Route path="matches" component={Matches} />
			<Route path="players" component={Players} />
			
			<Route path="profile" component={Profile} />
			<Route path="messages" component={Messages}>
				<Route path="/messages/:userId" component={NotFound} />
			</Route>

			<Route path="*" component={NotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);
