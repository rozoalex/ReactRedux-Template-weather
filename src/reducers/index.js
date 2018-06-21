import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers(
  {weather: WeatherReducer}
);
// What does combineReducers do exactly? 
// turns an object whose values are different reducing functions 
// into a single reducing function 

export default rootReducer;
