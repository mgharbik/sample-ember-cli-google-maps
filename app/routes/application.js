import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.A([
	    	{title: "Home", lat: 14.766127, lng: 1.810987, body: "Here is my home"},
	      	{title: "Shop", lat: 14.762963, lng: 102.812285, body: "Here is my shop", isInfoWindowVisible: true},
	      	{title: "Job", lat: 14.762900, lng: 102.812018, body: "Here is my job"}
	   ]);
	}
});
