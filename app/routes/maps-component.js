import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
	return {
	  locations: [
	    Ember.Object.create({ name: 'Prague', latitude: 50.08804, longitude: 14.42076 }),
		Ember.Object.create({ name: 'New York', latitude: 40.71427 , longitude: -74.00597 }),
	    Ember.Object.create({ name: 'Sydney', latitude: -33.86785, longitude: 151.20732 })
	  ], 
	  markers: [
        Ember.Object.create({ latitude: 50.08703, longitude: 14.42024 }), // Prague
        Ember.Object.create({ latitude: 50.08609, longitude: 14.42091 }), // Prague
        Ember.Object.create({ latitude: 40.71356, longitude: -74.00632 }), // New York
        Ember.Object.create({ latitude: -33.86781, longitude: 151.20754 }) // Sydney
      ]
    };
  }
});
