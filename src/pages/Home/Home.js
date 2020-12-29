import { Typography } from '@material-ui/core';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Typography variant='h3' align='center'>Monitor App</Typography>
      <Typography  align='center'>An app to monitor your computer resources</Typography>
    </div>
  );
}

export default Home;