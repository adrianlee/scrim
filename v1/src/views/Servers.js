// Servers.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');

var Servers = React.createClass({
	getInitialState: function() {
		return { servers: []};
	},
	componentDidMount: function () {
		console.log("ServerBrowser componentDidMount");
		setTimeout(function (self) {
			// Assure Component isMounted
			if (self.isMounted()) {
				self.setState({
					servers: [
						{
							name: "Seattle #1",
							ip: "108.61.121.45:27015"
						},
						{
							name: "Seattle #2",
							ip: "63.211.221.34:27015"
						}
					]
				});
			}
		}, 50, this)
	},
	render: function() {
		return <div>
			<h1>Servers</h1>
			<ServerBrowser servers={this.state.servers} />
		</div>;
	}
});

module.exports = Servers;