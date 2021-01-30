import React from 'react';

export default class BallisticsTable extends React.Component {
  render() {
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
          <tr>
            <td>0</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>100</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>200</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>300</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>400</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>500</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>600</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>700</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>800</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>900</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1000</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
