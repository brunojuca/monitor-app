import React from 'react';


function Processes({processes}) {
    return ( 
      <div className="Processes">
          <h1>Processes Page</h1>
          <ul>
            {processes.map((item,i) => <li key={i}>{item.name}</li>)}
          </ul>
      </div>
    );
  }
  
  export default Processes;