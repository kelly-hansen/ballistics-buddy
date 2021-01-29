import React from 'react';
import { Line } from 'react-chartjs-2';

export default class BallisticsChart extends React.Component {
  render() {

    const data = {
      labels: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
      xAxisID: 'Distance (yds)',
      datasets: [
        {
          label: '.308',
          fill: false,
          borderColor: 'rgba(241, 226, 111, 1)',
          backgroundColor: 'rgba(241, 226, 111, 1)',
          data: [1.5, 0, 4, 14, 32, 59, 96, 145, 208, 289, 390]
        }
      ]
    };

    const options = {
      legend: {
        labels: {
          fontColor: 'gray'
        }
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Distance (yds)',
            fontColor: 'gray'
          },
          ticks: {
            fontColor: 'gray'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bullet Drop (in)',
            fontColor: 'gray'
          },
          ticks: {
            reverse: true,
            fontColor: 'gray'
          }
        }]
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return tooltipItem[0].label + ' yds';
          },
          label: function (tooltipItem) {
            return `${data.datasets[0].label}: ${tooltipItem.yLabel} in`;
          }
        }
      }
    };

    return (
      <Line data={data} options={options} />
    );
  }
}
