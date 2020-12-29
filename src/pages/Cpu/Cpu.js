import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { makeStyles, Typography, Box, Grid } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import { CircularProgressWithLabel } from '../../components'

const useStyles = makeStyles((theme)=>({
  root: {
  },
  container: {
    display: 'flex',
    width: '50%',
    margin: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  percentage : {
    margin: theme.spacing(2),
  }
}));

function Cpu() {

  const classes = useStyles();
  const { data, loading, cpuArray } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className={classes.root}>
            <Typography variant="h3" align="center">CPU</Typography>
            
            <Box className={classes.container}>
            <CircularProgressWithLabel className={classes.percentage} value={data.cpu} />
            <Line
              data={{
                labels: cpuArray.map(()=>""),
                datasets: [{
                  data: cpuArray,
                  label: 'CPU Usage',
                  borderColor: '#b71c1c',
                  fill: true,
                }],
              }}
            />
            </Box>
          </div>
        )}
    </div>
  );
}

export default Cpu;