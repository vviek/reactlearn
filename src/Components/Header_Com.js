import React from 'react';
import './External.css';

export default  function Welcome(props) {
  
  return <>
  <div className="red-text"> Test CSS</div>
  <h1 >Hello, {props.name} </h1>
  <h1>Your age is {props.age}</h1>
  </>;
}
