import Ember from 'ember';

export default Ember.ArrayController.extend({
  zoom:      17,
  centerLat: 14.7646531,
  centerLng: 102.8115874,

  polyline: Ember.computed('model', function () {
    return {
      path:       this.get('model'),
      isEditable: true
    };
  }),

  polylinesArray: Ember.computed('polyline', function () {
    return [this.get('polyline')];
  }),

  actions: {
    duplicateMarker: function (target) {
      var newMarker, marker;
      // the ember target is the view, so our marker is the model of the controller for that view
      marker = target.get('controller.model');
      // we copy the marker
      newMarker = Ember.getProperties(marker, Ember.keys(marker));
      // add 0.0002 to its coordinates
      newMarker.lat += 0.0002;
      newMarker.lng += 0.0002;
      // and insert it right before the copied marker
      this.insertAt(this.indexOf(marker) + 1, newMarker);
      // stop propagation so that the context menu doesn't show-up
      return false;
    }
  }
});
