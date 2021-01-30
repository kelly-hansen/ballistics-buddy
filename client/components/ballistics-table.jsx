import React from 'react';
import AppContext from '../lib/app-context';

export default class BallisticsTable extends React.Component {
  render() {
    const tableData = this.props.caliber1Data.ballisticsData.map((dataItem, i) => {
      const bulletDrop = dataItem.distance === 0 ? '-' : dataItem.bulletDrop;
      let adjustment;
      if (dataItem.distance === 0) {
        adjustment = '-';
      } else {
        const distanceMultiplier = dataItem.distance / 100;
        if (this.context.units === 'MOA') {
          adjustment = dataItem.bulletDrop / distanceMultiplier / 1.047;
        } else if (this.context.units === 'MRAD') {
          adjustment = dataItem.bulletDrop / distanceMultiplier / 3.6;
        }
        adjustment = adjustment.toFixed(2);
      }

      return (
        <tr key={`dataItem${i}`}>
          <td>{dataItem.distance}</td>
          <td>{bulletDrop}</td>
          <td>{adjustment}</td>
        </tr>
      );
    });

    return (
      <table className="ballistics-table text-center">
        <thead>
          <tr>
            <th>Distance (yds)</th>
            <th>Bullet Drop (in)</th>
            <th>{this.context.units}</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

BallisticsTable.contextType = AppContext;
