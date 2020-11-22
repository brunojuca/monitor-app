import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './api';
import { Grid, Typography, Card, CardContent, CircularProgress, LinearProgress, StylesProvider } from '@material-ui/core';
import  CircularProgressWithLabel  from './components/CircularProgressWithLabel';

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
      <div className="Loading-page">
        <CircularProgress></CircularProgress>
      </div>
    );  

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>
        <Grid container justify="center" spacing={3}>
          <Grid item component={Card} className="card">
            <CardContent>
              <Typography>CPU</Typography>
              <CircularProgressWithLabel value={data.cpu}></CircularProgressWithLabel>
            </CardContent>
          </Grid>
          <Grid item component={Card} className="card">
            <CardContent>
              <Typography>Memory</Typography>
              <Typography style={{fontSize: 15}}>
                Total: {data.memory.total}MB <br/>
                Free: {data.memory.free}MB <br/>
                Used: {data.memory.used}MB <br/>
              </Typography>
              <LinearProgress variant="determinate" value={data.memory.computed}></LinearProgress>
            </CardContent>
          </Grid>
          <Grid item component={Card} className="card">
            <CardContent>
              <Typography>Processes</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className="card">
            <CardContent>
              <Typography>Network</Typography>
            </CardContent>
          </Grid>
        </Grid>

        <button id="start" onClick={() => setPaused(false)} >Start</button>
        <button id="stop" onClick={() => setPaused(true)} >Stop</button>

      </body>
    </div>
  );
}

export default App;
