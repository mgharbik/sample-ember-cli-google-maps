import Ember from 'ember';

export default Ember.ArrayController.extend({
  zoom: 17,
  centerLat: 14.7646531,
  centerLng: 102.8115874,
  
  polyline: Ember.computed('model', function() {
    return {
	  path: this.get('model'), 
	  isEditable: true
	};
  }),
  
  polylinesArray: Ember.computed('polyline', function() {
    return [ this.get('polyline') ];
  })
});