// ConversationList.js

var React = require('react');

var ConversationList = React.createClass({
	render: function() {

		var list = ["irok", "cesar", "tonyngo", "richy"];

		var items = list.map(function (item) { return <div className="ConversationListItem" key={item}>{item}</div> });

		return <div className="ConversationList">
			{items}
		</div>;
	}
});

module.exports = ConversationList;