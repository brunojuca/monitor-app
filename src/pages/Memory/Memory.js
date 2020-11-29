import React from 'react';

function Memory({ memory: { total, used, free, computed } }) {
    return ( 
      <div className="Memory">
          <h1>Memory Page</h1>
          <p>Total: {total}</p>
          <p>Used: {used}</p>
          <p>Free: {free}</p>
      </div>
    );
  }
  
  export default Memory;