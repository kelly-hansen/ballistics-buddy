import React from 'react';
import AppContext from '../lib/app-context';

export default class BallisticsTable extends React.Component {
  render() {
    const tableData = this.props.caliber1Data.ballisticsData.map((dataItem, i) => {
      const bulletDrop = dataItem.distance === 0 ? '-' : dataItem.bulletDrop;

      return (
        <tr key={`dataItem${i}`}>
          <td>{dataItem.distance}</td>
          <td>{bulletDrop}</td>
          <td></td>
        </tr>
      );
    });

    return (
      <table className="ballistics-table text-center">
        <thead>
          <tr>
            <th>Distance (yds)</th>
            <th>Bullet Drop (in)</th>
            <th>Adj</th>
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
