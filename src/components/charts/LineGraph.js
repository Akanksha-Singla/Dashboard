import React from 'react';
import { Chart } from 'react-google-charts';

const LineGraph = () => {
  const data = [
    ['Year', 'Sales', 'Expenses'],
    ['2015', 1000, 400],
    ['2016', 1170, 460],
    ['2017', 660, 1120],
    ['2018', 1030, 540],
  ];

  const options = {
    title: 'Sales and Expenses',
    curveType: 'function',
    legend: { position: 'bottom' },
    
  };

  return (
    <Chart
      width={'300px'}
      height={'80px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
    />
  );
};

export default LineGraph;
