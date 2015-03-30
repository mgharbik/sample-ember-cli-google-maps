import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.A([
      {title: "Home", latitude: 14.766127, longitude: 1.810987, body: "Here is my home"},
      {title: "Shop", latitude: 14.762963, longitude: 102.812285, body: "Here is my shop"},
      {title: "Job", latitude: 14.762900, longitude: 102.812018, body: "Here is my job"}
    ]);
  }
});
