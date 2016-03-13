// Events.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');

var Events = React.createClass({
	getInitialState: function() {
		return { Events: []};
	},
	componentDidMount: function () {
		
	},
	render: function() {
		return <div>
			<h1>Events</h1>
		</div>;
	}
});

module.exports = Events;