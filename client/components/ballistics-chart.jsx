import React from 'react';
import { Line } from 'react-chartjs-2';

export default class BallisticsChart extends React.Component {
  render() {
    const data = {
      labels: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
      datasets: [
        {
          label: '.308',
          fill: false,
          backgroundColor: 'rgba(241, 226, 111, 1)',
          borderColor: 'rgba(241, 226, 111, 0.5)',
          data: [-1.5, 0, -4, -14, -32, -59, -96, -145, -208, -289, -390]
        }
      ]
    };
    return (
      <Line data={data} />
    );
  }
}
