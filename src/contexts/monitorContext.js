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
  const [cpuArray, setCpuArray] = useState([]);
  const [darkMode, setDarkmode] = useState(false);

  useEffect(() => {
    if (!paused) {
      const fetchApi = async () => {
        const tempData = await fetchData();
        setCpuArray([...cpuArray, tempData.cpu]);
        setData({...tempData, processes: tempData.processes.sort((a, b) => b.cpu-a.cpu)});
        loading && setLoading(false);
      }
      fetchApi();
    }
  }, [paused, data]);


  return (
    <monitorContext.Provider value={{ data, setData, paused, setPaused, loading, cpuArray, darkMode, setDarkmode }}>
      {children}  
    </monitorContext.Provider>
  );
}

export function useMonitorData() {
  const { data, paused, setPaused, loading, cpuArray, darkMode, setDarkmode } = useContext(monitorContext);
  return { data, paused, setPaused, loading, cpuArray, darkMode, setDarkmode };
}