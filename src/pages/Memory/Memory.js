import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { Grid, makeStyles, Typography } from '@material-ui/core';

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
          </div>
        )}
    </div>
  );
}

export default Memory;