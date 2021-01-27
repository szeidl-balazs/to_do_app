import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';


const Dashboard = () => {
  const [list, setlist] = useState([]);
  return(
    <div className="dashboard">
      <input placeholder="Untitled dashboard"/>
      <button className="createCard" onClick={() => setlist([...list, <Card key={uuidv4()}/>])}>Create card</button>
      {list}
    </div>
  );
}

const CreateDashboard = () => {
  const [list, setlist] = useState([<Dashboard key={uuidv4()}/>]);

  return(
    <div>
      {list}
      <button className="dashboard" onClick={() => setlist([...list, <Dashboard key={uuidv4()}/>])}>+</button>
    </div>
  );
}

export default CreateDashboard;