import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './api';
import loadingGif from './images/loadingGif.gif'

function App() {

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
    if (!paused)
      setUpdateInterval(setInterval(() => {
        const fetchAPI = async () => {
          setData(await fetchData());
          setLoading(false);
        }
        fetchAPI();
      }, 1000));
    else
      clearInterval(updateInterval);
  },[paused]);

  if (loading)
    return (
      <div className="Loading-page">
        <img src={loadingGif} alt="loading"/>
      </div>
    );  

  return (
    <div className="App">
      <header className="App-header">
             
          CPU: {data.cpu}% <br/>
          Total Memory: {data.memory.total}MB <br/>
          Free Memory: {data.memory.free}MB <br/>
          Used Memory: {data.memory.used}MB <br/>
          <button id="start" onClick={() => setPaused(false)} >Start</button>
          <button id="stop" onClick={() => setPaused(true)} >Stop</button>

      </header>
    </div>
  );
}

export default App;
