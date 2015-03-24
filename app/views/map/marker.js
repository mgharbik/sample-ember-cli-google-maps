import Ember from 'ember';
import GoogleMapMarkerView from '../google-map/marker';

export default GoogleMapMarkerView.extend({
  googleEvents: { rightclick: 'duplicateMarker' }
});