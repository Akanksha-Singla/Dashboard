import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const RealTimeChart = () => {
  const [data, setData] = useState([
    ['Time', 'Value'],
    [new Date(), 0], // Initial data point
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = [
        ...data,
        [new Date(), Math.random() * 100], // Generate random data for the new point
      ];
      setData(newData);
    }, 1000); // Update the chart every second

    return () => clearInterval(interval);
  }, [data]);

  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: 'Real-time Chart',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"]
      }}
    />
  );
};

export default RealTimeChart;
