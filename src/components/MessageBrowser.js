// MessageBrowser.js
var React = require('react');

var MessageBrowserItem = require('./ServerBrowserItem');
var ConversationList = require('./ConversationList');
var Conversation = require('./Conversation');

var MessageBrowser = React.createClass({
	render: function() {
		return <div className="MessageLayout">
			<ConversationList />
			<Conversation />
			{ /* <ConversationList contact={} /> */ }
			{ /* <Conversation contact={} msgCollection={} /> */ }
		</div>;
	}
});

module.exports = MessageBrowser;