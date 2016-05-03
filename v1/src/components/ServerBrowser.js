// ServerBrowser.js

var React = require('react');

var ServerBrowserItem = require('./ServerBrowserItem');

var ServerBrowser = React.createClass({
	render: function() {
		return <table className="ServerBrowser">
			<thead>
				<tr>
					<th id="ServerBrowserStatus"></th>
					<th>Name</th>
					<th>IP Address</th>
				</tr>
			</thead>
			<tbody>
				{
					this.props.servers.map(function(server) {
						return <ServerBrowserItem key={server.name + server.ip} server={server} />
					})
				}
			</tbody>
		</table>;
	}
});

module.exports = ServerBrowser;