import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.A([
	    	{id: 1, title: "Home", latitude: 14.766127, longitude: 1.810987, body: "Here is my home"},
	      	{id: 2, title: "Shop", latitude: 14.762963, longitude: 102.812285, body: "Here is my shop"},
	      	{id: 3, title: "Job", latitude: 14.762900, longitude: 102.812018, body: "Here is my job"}
	   ]);
	}
});
