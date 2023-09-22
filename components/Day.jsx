import React from 'react';

function Day(props) {
  return <div>{props.day.getDate()}</div>;
}

export default Day;
