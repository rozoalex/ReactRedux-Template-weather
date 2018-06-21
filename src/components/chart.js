import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data) / data.length);
}

export default ({ data, color='black', chart_height=150, chart_width=180, units='' }) => {


  return (
    <div>
      <Sparklines height={chart_height} width={chart_width} data={ data }>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
      <div>{average( data )} {units}</div>
    </div>
  );
}