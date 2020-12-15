import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';

function Network() {

  const { data, loading } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className="Network">
            <h1>Network Page</h1>
            <ul>
              {data.network.map((item) => <li key={item.interface}>{item.interface}</li>)}
            </ul>
          </div>
        )}
    </div>

  );
}

export default Network;