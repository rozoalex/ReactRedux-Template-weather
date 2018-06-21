import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';


import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(wtr => wtr.main.temp);
    const pressures = cityData.list.map(prs => prs.main.pressure);
    const humidities = cityData.list.map(hum => hum.main.humidity);
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;

    return ( // REMEMBER TO ADD KEY!
      <tr key={name}>
        <td width><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={ temps } color={'red'} units='K'/></td>
        <td><Chart data={ pressures } color={'blue'} units='hPa'/></td>
        <td><Chart data={ humidities } color={'green'} units='%'/></td>
      </tr>
    )
  }

  render() {
    console.log(this.props);
    const weathers = this.props.weather ? this.props.weather : [];


    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th> City </th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {weathers.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
// {this.props.weather.map(this.renderWeather)}

function mapStateToProps({weather}) {
  return { weather: weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);