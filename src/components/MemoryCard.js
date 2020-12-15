import React from 'react';
import { Card, Typography, makeStyles, Grid } from '@material-ui/core';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    minWidth: 150,
    margin: theme.spacing(),
  },
  }));

function MemoryCard({ children, value }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card className={classes.root}>
      <Typography className={classes.title} variant="h4">{children}</Typography>
      <Typography className={classes.value} variant="h6">{value}</Typography>
    </Card>
    </Grid>
  );
}

export default MemoryCard;