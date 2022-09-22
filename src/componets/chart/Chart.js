import React from 'react';
import './chart.css';
import { useState, useEffect } from "react";

function Chart({request}) {

  const [dataState, setDataState] = useState()

  useEffect(() => {
    // console.log(request.toString(), 'here')
    data(request);
    const intervalId = setInterval(() => {
      data(request);
    }, 15000);
    return () => clearInterval(intervalId);
  }, [request]);

  const data = async (value) => {
    await fetch(`https://api.factoryfour.com/${value}/health/status`)
      .then((res) => res.json())
      .then((data) => setDataState(data))
      .catch((err) => { console.log(err) });
  };

  let calculateTime = (number) => {
    let time = new Date(number)
    return time.toTimeString().split(" ")[0]
  }

  let actualTime = calculateTime(dataState?.time)


  return (
    <div className='chart-container'>
      
      <h2 className='chart-name'>{request.toString().toUpperCase()}</h2>
      <h3 className={dataState?.success ? "card-healthy" : "card-error"}>{dataState?.success ? "Healthy" : "Error"}</h3>
      <h4 className={dataState?.success ? "card-healthy-hostname" : "card-error-hostname"}>{dataState?.success ? dataState.hostname : "OUTAGE"}</h4>
      <h4 className={dataState?.success ? "card-healthy-time" : "card-error-time"}>{dataState?.success ? actualTime : "403 Forbidden"}</h4>
    </div>
  )   
}

export default Chart