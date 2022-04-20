import React from 'react'
import "../assets/css/10-clock1.css";
import moment from "moment";




const Clock2= (props) => {

const dateTime = moment();
const dateStr=dateTime.format("LL");
const timeStr=dateTime.format("HH:mm");
const dayStr=dateTime.format("dddd");
const hourStr=dateTime.format("HH");
let message="";
if (hourStr>=6 && hourStr<11) {
  message="Morning";
}else if (hourStr>=11 &&hourStr<17) {
  message="Afternoon";

}else if (hourStr>=17 &&hourStr<21) {
  message="Evening";
  
}else {
  message="Night";
}



const still = {
  backgroundColor:props.bgColor,
  color:props.color
}


  return (

    <div className="clock-container" style={still}>
      <div className="time">{timeStr}</div>
      <div>
          <div className="date">{dateStr}</div>
          <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  )
}

export default Clock2