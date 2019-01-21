import React from 'react';
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

export const MapComponent =  withScriptjs(withGoogleMap((props) => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -33.448611, lng: -70.625867 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -33.448611, lng: -70.625867 }} />}
  </GoogleMap>
  ))