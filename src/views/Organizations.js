// Organizations.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');

var Organizations = React.createClass({
	getInitialState: function() {
		return { organizations: []};
	},
	componentDidMount: function () {
		
	},
	render: function() {
		return <div>
			<h1>Organizations</h1>
		</div>;
	}
});

module.exports = Organizations;