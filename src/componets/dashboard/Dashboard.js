import React from 'react';
import Chart from '../chart/Chart';
import './dashboard.css';


function Dashboard({ requests }) {

  return (
    <div className="dashboard-container">
      <table>
      <tr>
        <th>API Name</th>
        <th>Status</th>
        <th>Host Name</th>
        <th>Last Checked at</th>
      </tr>
      {requests?.map((request, index) => {
        return (
          <Chart request={request} key={index} />
        )
      })}
      </table>
    </div>
  )
}

export default Dashboard