import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loading.css';

function Loading() {
    return ( 
    <div className="Loading">
        <CircularProgress size={100}></CircularProgress>
    </div>
    );
  }
  
  export default Loading;