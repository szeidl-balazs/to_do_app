function createDashboard() { 
  const main = document.querySelector('.mainContainer');

  main.insertAdjacentHTML('beforeend',`
    
  `);
}


function Dashboard() {
  return (
    <div className="dashboard">
      <input placeholder="Untitled dashboard"/>
      <button className="createCard">Create card</button>
      <button className="plus" onClick={createDashboard}><i className="fas fa-plus"></i></button>
    </div>
  )
}

export default Dashboard;