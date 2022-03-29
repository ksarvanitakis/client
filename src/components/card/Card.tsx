import React, { useState, useEffect } from 'react';

function Card(props: { chef: Chef}) {
  
  return (
    <div className="card--container">
      <p>{props.chef.name}</p>
      <p>{props.chef.description}</p>
    </div>
  );
}

export default Card;
