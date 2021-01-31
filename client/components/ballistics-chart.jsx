import React from 'react';
import { Line } from 'react-chartjs-2';

export default class BallisticsChart extends React.Component {
  render() {

    const data = {
      labels: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
      xAxisID: 'Distance (yds)',
      datasets: []
    };

    const caliber1Data = [];
    for (let i = 0; i < this.props.caliber1Data.ballisticsData.length; i++) {
      caliber1Data.push(this.props.caliber1Data.ballisticsData[i].bulletDrop);
    }
    const caliber1Dataset = {
      label: this.props.caliber1Data.caliber,
      fill: false,
      borderColor: 'rgba(241, 226, 111, 1)',
      backgroundColor: 'rgba(241, 226, 111, 1)',
      data: caliber1Data
    };
    data.datasets.push(caliber1Dataset);

    if (this.props.caliber2Data) {
      const caliber2Data = [];
      for (let i = 0; i < this.props.caliber2Data.ballisticsData.length; i++) {
        caliber2Data.push(this.props.caliber2Data.ballisticsData[i].bulletDrop);
      }
      const caliber2Dataset = {
        label: this.props.caliber2Data.caliber,
        fill: false,
        borderColor: 'deepskyblue',
        backgroundColor: 'deepskyblue',
        data: caliber2Data
      };
      data.datasets.push(caliber2Dataset);
    }

    const options = {
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Distance (yds)',
            fontColor: 'white'
          },
          ticks: {
            fontColor: 'white'
          },
          gridLines: {
            color: '#515151'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Bullet Drop (in)',
            fontColor: 'white'
          },
          ticks: {
            fontColor: 'white'
          },
          gridLines: {
            color: '#515151'
          }
        }]
      },
      tooltips: {
        mode: 'index',
        callbacks: {
          title: function (tooltipItem, data) {
            return tooltipItem[0].label + ' yds';
          },
          label: function (tooltipItem, data) {
            return `${data.datasets[tooltipItem.datasetIndex].label}: ${tooltipItem.yLabel} in`;
          }
        }
      }
    };

    return (
      <div className="ballistics-chart">
        <Line data={data} options={options} />
      </div>
    );
  }
}
