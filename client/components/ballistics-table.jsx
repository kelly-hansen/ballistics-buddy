import React, { useContext } from 'react';
import AppContext from '../lib/app-context';

export default function BallisticsTable(props) {
  const tableData = props.caliber1Data.ballisticsData.map((dataItem, i) => {
    let adjustment;
    if (dataItem.distance === 0) {
      adjustment = '-';
    } else {
      const distanceMultiplier = dataItem.distance / 100;
      const { units } = useContext(AppContext);
      if (units === 'MOA') {
        adjustment = dataItem.bulletDrop / distanceMultiplier / 1.047;
      } else if (units === 'MRAD') {
        adjustment = dataItem.bulletDrop / distanceMultiplier / 3.6;
      }
      adjustment = -adjustment.toFixed(2);
    }

    return (
      <tr key={`dataItem${i}`}>
        <td>{dataItem.distance}</td>
        <td>{dataItem.bulletDrop}</td>
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
          <AppContext.Consumer>
            {value => <th>{value.units}</th>}
          </AppContext.Consumer>

        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  );
}
