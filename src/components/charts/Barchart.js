import React from 'react';
import { Chart } from 'react-google-charts';


const Barchart = () => {
  const data = [
    ['Category', 'Series 1', 'Series 2', 'Series 3'],
    ['Label 1', 50, 30, 20],
    ['Label 2', 40, 10, 50],
    ['Label 3', 20, 50, 30],
    ['Label 4', 10, 30, 60],
    ['Label 5', 50, 30, 20],
    ['Label 6', 40, 10, 50],
    ['Label 7', 20, 50, 30],
    ['Label 8', 10, 30, 60],
   
  ];

  const options = {
    chartArea: { width: '70%', height: '70%' },
    isStacked: true,
    legend: { position: 'top' },
    hAxis: {
      minValue: 0,
    },
    colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"]
  };

  return (

    <Chart
      width='100%'
      height= {'350px'}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
    />
  );
};

export default Barchart;
