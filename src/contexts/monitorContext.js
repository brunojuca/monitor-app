import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from '../api';

const monitorContext = createContext();

export default function MonitorDataProvider({ children }) {
  const [data, setData] = useState({
    cpu: 0,
    memory: { total: 0, used: 0, free: 0, computed: 0 },
    processes: [],
    network: [],
  });

  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      const fetchApi = async () => {
        const tempData = await fetchData();
        setData({...tempData, processes: tempData.processes.sort((a, b) => b.cpu-a.cpu)});
        loading && setLoading(false);
      }
      fetchApi();
    }
  }, [paused, data]);


  return (
    <monitorContext.Provider value={{ data, setData, paused, setPaused, loading }}>
      {children}  
    </monitorContext.Provider>
  );
}

export function useMonitorData() {
  const { data, paused, setPaused, loading } = useContext(monitorContext);
  return { data, paused, setPaused, loading };
}