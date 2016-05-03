// Teams.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');

var Teams = React.createClass({
	getInitialState: function() {
		return { organizations: []};
	},
	componentDidMount: function () {
		
	},
	render: function() {
		return <div>
			<h1>Teams</h1>
		</div>;
	}
});

module.exports = Teams;