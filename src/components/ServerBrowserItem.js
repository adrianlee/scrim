// ServerBrowserItem.js

var React = require('react');

var ServerBrowserItem = React.createClass({
	render: function() {
		return <tr className="ServerBrowserItem">
			<td>{this.props.server && this.props.server.status}</td>
			<td>{this.props.server && this.props.server.name}</td>
			<td>{this.props.server && this.props.server.ip}</td>
		</tr>;
	}
});

module.exports = ServerBrowserItem;