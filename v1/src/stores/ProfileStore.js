var Reflux = require('reflux');
var $ = require('jquery');
var Actions = require('../actions/Actions');

var ProfileStore = Reflux.createStore({
    listenables: [Actions],
    sourceUrl: '/users',

    // init: function() {
    //     // this.fetchProfile();
    //     // this.listenTo(ProfileActions.fetchProfile, this.onFetchProfile);
    //     // this.listenToMany(ProfileActions);
    // },

    onFetchProfile: function() {
        // If we already have the profile
        if (this.profile)
            this.trigger(this.profile)

        $.ajax({
            method: 'GET',
            url: this.sourceUrl,
            dataType: 'json',
            cache: false,
            context: this,
            success: function(data) {
                console.log("onFetchProfile:", data);
                this.profile = [data];
                if (this.profile != [data])
                    this.trigger(this.profile);
            },
            error: function () {
                this.trigger([]);
            }
        });
    }
});

module.exports = ProfileStore;
