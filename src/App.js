import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Typography, CircularProgress, LinearProgress } from '@material-ui/core';
import { fetchData } from './api';
import { CircularProgressWithLabel, Header }  from './components';
import { Cpu , Memory, Network, Processes, Loading } from './pages';
import './App.css';

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
    // eslint-disable-next-line  
  },[paused]);

  if (loading)
    return (
      <div className="Loading">
          <CircularProgress></CircularProgress>
      </div>
    );

  return ( 
    <div className="App">
      <Router>

        <Header onChange={()=> setPaused(!paused)} paused={paused}></Header>
        {console.log(paused)}
        <Route path="/cpu" render={(props) => <Cpu {...props} cpu={data.cpu} />}/>
        <Route path="/memory" render={(props) => <Memory {...props} memory={data.memory} />}/>
        <Route path="/processes" render={(props) => <Processes {...props} processes={data.processes} />}/>
        <Route path="/network" render={(props) => <Network {...props} network={data.network} />}/>

      </Router>

    </div>
  );
}

export default App;