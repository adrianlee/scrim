// Matches.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');

var Matches = React.createClass({
	getInMatchesitialState: function() {
		return { organizations: []};
	},
	componentDidMount: function () {
		
	},
	render: function() {
		return <div>
			<h1>Matches</h1>
		</div>;
	}
});

module.exports = Matches;