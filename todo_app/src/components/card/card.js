import React, { useState } from 'react';


const Card = () => {
  const [title, setTitle] = useState("Title")
  let [visibility, setVisibility] = useState("none")
  return(
    <div className="card">
      <input type="button" onClick={() => setVisibility(visibility==='none' ? 
        visibility='block' : 'none')} value={title}></input>

      <div style={{display: visibility}}>
        <input type="text" onInput={(e) => setTitle(e.target.value)} />
        <div>
          <textarea rows={4} cols={50} placeholder="Enter text here..."></textarea>
        </div>
      </div>

      <button className="deleteCard">x</button>
    </div>
  );
}

export default Card;