let ClockTimes=()=>{
  let time = new Date();
  return <div>
<p className="show-time">This is the current date and time: <span> <p className="exact-time">{time.toLocaleDateString()}---{time.toLocaleTimeString()}</p></span> </p>
  </div>
}

export default ClockTimes;