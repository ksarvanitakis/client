import React, { useState, useEffect } from 'react';

function Card({ name,description,image }:Chef) {
  console.log(name)
  return (
    <div className="card--container">
      <p>{name}</p>
      <p>{description}</p>
      <img src={image[1]}/>
    </div>
  );
}

export default Card;
