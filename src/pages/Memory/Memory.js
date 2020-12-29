import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { Grid, LinearProgress, makeStyles, Typography } from '@material-ui/core';

import { MemoryCard } from '../../components';

const useStyles = makeStyles((theme)=> ({
  root: {
  },
  title: {
    margin: theme.spacing(2),
  },
  container: {
    justifyContent: "center",
    display: "flex",
  },
  bar: {
    width: "40%",
    height: "10px",
    margin: "auto",
    marginTop: theme.spacing(5),
  }
}));

function Memory() {

  const { data, loading } = useMonitorData();
  const classes = useStyles();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className={classes.root}>
            <Typography className={classes.title} variant="h3" align="center">Memory</Typography>
            <Grid container className={classes.container}>
                <MemoryCard value={data.memory.total}>Total</MemoryCard>
                <MemoryCard value={data.memory.used}>Used</MemoryCard>
                <MemoryCard value={data.memory.free}>Free</MemoryCard>
            </Grid>
            <LinearProgress value={(data.memory.used/data.memory.total)*100} variant="determinate" className={classes.bar} />
          </div>
        )}
    </div>
  );
}

export default Memory;