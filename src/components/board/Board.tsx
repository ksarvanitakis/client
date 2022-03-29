import Card from '../../components/card/Card';
import React, { useState, useEffect } from 'react';

function Board() {

  const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/chefs`)
      .then(res => res.json())
      .then(data => setChefs(data));
  }, []);

  return (
    <div className="board--container">
      {chefs.map((chef, index) => {
        <Card chef={chef} key={index} />
      })}
    </div>
  );
}

export default Board;
