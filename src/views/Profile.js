// Profile.js
var React = require('react');
var Reflux = require('reflux');
var ProfileStore = require('../stores/ProfileStore');
var Actions = require('../actions/Actions');
var moment = require('moment');

var Profile = React.createClass({
	mixins: [Reflux.connect(ProfileStore, 'profilestore')],
	// mixins: [Reflux.ListenerMixin],
	// onProfileChange: function(status) {
	// 	this.setState({
	// 		profile: status
	// 	});
	// },
	componentDidMount: function() {
		Actions.fetchProfile();
	},
	// componentWillUnmount: function() {
	// 	this.unsubscribe();
	// },
	render: function() {
		if (!this.state.profilestore)
			return null;

		var profile = this.state.profilestore && this.state.profilestore[0];
		if (profile) {
			var created_at = moment(profile["created_at"]).fromNow();
			// var created_at = moment(profile.created_at).format('ll');

			return <div className="ProfileLayout">
				<h1>Profile</h1>
				<img src={ profile.avatar }/>
				<div>{ profile.alias }</div>
				<div>{ profile.profileurl }</div>
				<div>{ profile.steamid }</div>
				<div>Joined { created_at }</div>
			</div>;
		}

		return <div>Unable to retrieve profile</div>
	}
});

module.exports = Profile;