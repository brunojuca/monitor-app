import React from 'react';

function Network({network}) {
    return ( 
      <div className="Network">
          <h1>Network Page</h1>
          <ul>
            {network.map((item,i) => <li key={i}>{item.interface}</li>)}
          </ul>
      </div>
    );
  }
  
  export default Network;