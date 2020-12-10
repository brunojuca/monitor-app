import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Typography, CircularProgress, LinearProgress } from '@material-ui/core';
import { CircularProgressWithLabel, Header } from './components';
import { Home, Cpu, Memory, Network, Processes } from './pages';
import './App.css';
import MonitorDataProvider from './contexts/monitorContext'

function App() {

  return (
    <MonitorDataProvider>
      <div className="App">
        <Router>

          <Header >Monitor App</Header>

          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route path="/cpu" component={Cpu} />
            <Route path="/memory" component={Memory} />
            <Route path="/processes" component={Processes} />
            <Route path="/network" component={Network} />
          </div>

        </Router>
      </div>
    </MonitorDataProvider>
  );
}

export default App;