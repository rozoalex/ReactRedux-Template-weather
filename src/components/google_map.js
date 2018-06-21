import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() { // life cycle method
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    }); // create a google map 
  }
  render() {
    return <div ref='map'/>;
  }
}

export default GoogleMap;