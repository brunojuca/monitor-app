import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';

function Cpu() {
  
  const { data, loading } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="Cpu">
          <h1>CPU Page</h1>
          <p>{data.cpu}</p>
        </div>
      )}  
    </div>  
  );
}

export default Cpu;