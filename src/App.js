import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { CircularProgressWithLabel, Header } from './components';
import { Home, Cpu, Memory, Network, Processes } from './pages';
import './App.css';
import MonitorDataProvider from './contexts/monitorContext'
import { Theme } from './theme/theme'

function App() {

  return (
    <MonitorDataProvider>
      <Theme>
      <div className="App">
        <CssBaseline />
        <Router>

          <Header>Monitor App</Header>

          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route path="/cpu" component={Cpu} />
            <Route path="/memory" component={Memory} />
            <Route path="/processes" component={Processes} />
            <Route path="/network" component={Network} />
          </div>

        </Router>
      </div>
      </Theme> 
    </MonitorDataProvider>
  );
}

export default App;