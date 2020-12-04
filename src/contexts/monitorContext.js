import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from '../api';

const monitorContext = createContext();

export default function MonitorDataProvider({ children }) {

    const [data, setData] = useState({
        cpu: 0,
        memory: { total: 0, used: 0, free: 0, computed: 0 },
        processes: {},
        network: {},
      });

    const [loading, setLoading] = useState(true);
    const [updateInterval, setUpdateInterval] = useState();
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!paused) {
         setTimeout(async () => {
            setData(await fetchData());
            loading && setLoading(false);        
          }, 0); // Time to wait beyond minimum of 1sec requested by api. 
        }
      },[paused, data, loading]);

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