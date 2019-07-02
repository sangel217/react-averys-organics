import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return(
    <div>
      <style jsx>{`
        div {
          background-color: #EE82EE;
          display: inline-block;
          padding: 10px;
        }
      `}</style>
      <h3>{props.day}</h3>
      <p>Location: {props.location}</p> 
      <p>Hours: {props.hours}</p> 
      <p>booth: {props.booth}</p>          
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;