import React from 'react';
import Chart from '../chart/Chart';
import './dashboard.css';


function Dashboard({ requests }) {

  return (
    <div className="dashboard-container">
      {requests?.map((el, index) => {
        return (
          <Chart name={el} key={index} />
        )
      })}
    </div>
  )
}

export default Dashboard