import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';

function Memory() {

  const { data, loading } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="Memory">
          <h1>Memory Page</h1>
          <p>Total: {data.memory.total}</p>
          <p>Used: {data.memory.used}</p>
          <p>Free: {data.memory.free}</p>
        </div>
      )}  
    </div>  
    
  );
}

export default Memory;