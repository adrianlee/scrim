// Players.js
var React = require('react');
var ServerBrowser = require('../components/ServerBrowser');
var moment = require('moment');
var $ = require('jquery');

var Table = require('fixed-data-table').Table;
var Column = require('fixed-data-table').Column;
var Cell = require('fixed-data-table').Cell;

var Players = React.createClass({
	getInitialState: function() {
		return { players: []};
	},
	shouldComponentUpdate: function () {
		return true;
	},
	componentWillMount: function () {
		
	},
	componentDidMount: function () {
		this.serverRequest = $.get("/users/all", function (result) {
			// set new state
			this.setState({ players: result } );
		}.bind(this));
	},
	componentWillUnmount: function() {
	    this.serverRequest.abort();
	},
	render: function() {
		console.log("render", this.state.players);

		// var o = JSON.stringify(this.state.players);

		// var players = this.state.players.map(function(i) {
		// 	var stringUser = JSON.stringify(i);
		// 	var created_at = moment(i["created_at"]).fromNow();

		// 	return <div key={i.id}><img src={i.avatar} /> {i.alias} {i.email}  {i.steamid} {created_at}</div>;
		// });

		var players = this.state.players;

		return <div>
			<h1>Players</h1>
			<Table
				rowsCount={players.length}
				rowHeight={50}
		        headerHeight={50}
		        width={500}
		        height={500}>
				<Column
		          header={<Cell>Avatar</Cell>}
		          cell={function (props) {
		            return <Cell {...props}>
		              <img src={players[props.rowIndex].avatar} height="35px" />
		            </Cell>
		          }}
		          width={200}
		        />
		        <Column
		          header={<Cell>Alias</Cell>}
		          cell={props => (
		            <Cell {...props}>
		              {players[props.rowIndex].alias}
		            </Cell>
		          )}
		          width={200}
		        />
		        <Column
		          header={<Cell>SteamID</Cell>}
		          cell={props => (
		            <Cell {...props}>
		              {players[props.rowIndex].steamid}
		            </Cell>
		          )}
		          width={200}
		        />
		        <Column
		          header={<Cell>Email</Cell>}
		          cell={props => (
		            <Cell {...props}>
		              {players[props.rowIndex].email}
		            </Cell>
		          )}
		          width={200}
		        />
		        <Column
		          header={<Cell>Created</Cell>}
		          cell={props => (
		            <Cell {...props}>
		              {moment(players[props.rowIndex].created_at).fromNow()}
		            </Cell>
		          )}
		          width={200}
		        />
			</Table>
		</div>;
	}
});

module.exports = Players;
