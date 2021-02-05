import React from 'react';
import { Line } from 'react-chartjs-2';

export default function BallisticsChart(props) {
  const data = {
    labels: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
    xAxisID: 'Distance (yds)',
    datasets: []
  };

  const caliber1Data = [];
  for (let i = 0; i < props.caliber1Data.ballisticsData.length; i++) {
    caliber1Data.push(props.caliber1Data.ballisticsData[i].bulletDrop);
  }
  const caliber1Dataset = {
    label: props.caliber1Data.caliber,
    fill: false,
    borderColor: 'rgba(241, 226, 111, 1)',
    backgroundColor: 'rgba(241, 226, 111, 1)',
    data: caliber1Data
  };
  data.datasets.push(caliber1Dataset);

  if (props.caliber2Data) {
    const caliber2Data = [];
    for (let i = 0; i < props.caliber2Data.ballisticsData.length; i++) {
      caliber2Data.push(props.caliber2Data.ballisticsData[i].bulletDrop);
    }
    const caliber2Dataset = {
      label: props.caliber2Data.caliber,
      fill: false,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
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
