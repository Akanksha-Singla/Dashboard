import React from 'react';
import { Chart } from 'react-google-charts';

const Piechart = () => {
  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Category', 'Value'],
        ['Layer 1', 30],
        ['Layer 2', 20],
        ['Layer 3', 10],
      ]}
      options={{
        pieHole: 0.5,
        pieSliceText: 'none',
        colors: ["rgb(53,138,148)","rgb(37,11,165)","#188310"], 
        
        // Additional options for customization
        }
     }
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default Piechart;
