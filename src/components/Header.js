import { AppBar, Typography, Toolbar, Button, makeStyles, Switch, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMonitorData } from '../contexts/monitorContext'

const useStyles = makeStyles((theme) => ({
  item: {
    marginRight: theme.spacing(5),
  },
  home: {
    marginRight: "auto",
  },
  title: {
    textTransform: "none",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { paused, setPaused } = useMonitorData();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.home}>
            <Button size="large">
              <Typography variant="h6" className={classes.title}>
                {props.children}
              </Typography>
            </Button>
          </Link>

          <Link to="/cpu" className={classes.item}>
            <Button size="large">CPU</Button>
          </Link>
          <Link to="/memory" className={classes.item}>
            <Button size="large">Memory</Button>
          </Link>
          <Link to="/processes" className={classes.item}>
            <Button size="large">Processes</Button>
          </Link>
          <Link to="/network" className={classes.item}>
            <Button size="large">Network</Button>
          </Link>

          <FormControlLabel
            className={classes.item}
            value="top"
            control={<Switch />}
            label="Dark Mode"
            labelPlacement="top"
          />
          <Button variant="contained" onClick={() => setPaused(!paused)} >{paused ? "Start" : "Stop"}</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}