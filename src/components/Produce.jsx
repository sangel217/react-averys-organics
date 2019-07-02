import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <h3>Available Produce in {props.month}:</h3>
      <ul>{props.selection.map((fruits) => <li> {fruits}</li>)}
        
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Produce;