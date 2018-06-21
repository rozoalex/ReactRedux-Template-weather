import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  console.log(action);
  console.log('reducer_weather');
  switch(action.type){
    case FETCH_WEATHER:
      return action.payload.data ? [action.payload.data, ...state] : state;
      // always remember NEVER manipulate state, concat makes a new array
      // inserted on the top
  }
  return state;
}