import React from 'react';
import Chart from '../chart/Chart';
import './dashboard.css';


function Dashboard({ requests }) {

  return (
    <div className="dashboard-container">
      {requests?.map((request, index) => {
        return (
          <Chart request={request} key={index} />
        )
      })}
    </div>
  )
}

export default Dashboard