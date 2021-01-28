import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';
import './dashboard.css';


const Dashboard = () => {
  const [list, setlist] = useState([]);
  return(
    <div className="dashboard">
      <div className="dashboardInput">
        <input placeholder="Untitled dashboard"/>
        <button className="createCard" onClick={() => setlist([...list, <Card key={uuidv4()}/>])}>Create Card</button>
      </div>
      {list}
    </div>
  );
}

const CreateDashboard = () => {
  const [list, setlist] = useState([<Dashboard key={uuidv4()}/>]);

  return(
    <div className="wrapper">
      {list}
      <button className="dashboardButton" onClick={() => setlist([...list, <Dashboard key={uuidv4()}/>])}>+</button>
    </div>
  );
}

export default CreateDashboard;