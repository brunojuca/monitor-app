import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';

function Processes() {

  const { data, loading } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className="Processes">
            <h1>Processes Page</h1>
            <ul>
              {data.processes.map((item, i) => <li key={i}>{item.name}</li>)}
            </ul>
          </div>
        )}
    </div>


  );
}

export default Processes;