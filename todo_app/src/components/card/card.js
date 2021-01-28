import React, { useState } from 'react';
import './card.css';


const Card = () => {
  const [title, setTitle] = useState("Title")
  let [visibility, setVisibility] = useState("none")

  const deleteCard = (e) => {
    e.target.parentElement.style.display = "none";
  };

  return(
    <div className="card">
      <input type="button" onClick={() => setVisibility(visibility==='none' ? 
        visibility='block' : 'none')} value={title}></input>

      <button className="deleteCard" onClick={deleteCard}>x</button>
      <div style={{display: visibility}}>
        <input className="cardInput" type="text" onInput={(e) => setTitle(e.target.value)} />
        <div className="textAreaContainer">
          <textarea rows={4} cols={24} placeholder="Enter text here..."></textarea>
        </div>
      </div>

    </div>
  );
}

export default Card;