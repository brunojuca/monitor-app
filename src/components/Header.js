import {AppBar, Typography, Toolbar, IconButton, Button, ButtonGroup, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useMonitorData } from '../contexts/monitorContext'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    links: {
        color: "inherit",
        marginRight: theme.spacing(5),
    },
    home: {
        color: "inherit",
        marginRight: "auto",
    }
  }));
  
  export default function Header(props) {
    const classes = useStyles();
    const { paused, setPaused } = useMonitorData();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar> 
            {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>*/}
            <Link to="/" className={classes.home}> 
                <Button color="inherit" size="large">
                  <Typography variant="h6" className={classes.title}>
                    {props.children}
                  </Typography>
                </Button>
            </Link>
          
            <Link to="/cpu" className={classes.links}> 
                <Button color="inherit" size="large">CPU</Button>
            </Link>
            <Link to="/memory" className={classes.links}> 
                <Button color="inherit" size="large">Memory</Button>                
            </Link>
            <Link to="/processes" className={classes.links}> 
                <Button color="inherit" size="large">Processes</Button>
            </Link>
            <Link to="/network" className={classes.links}> 
                <Button color="inherit" size="large">Network</Button>
            </Link>

            <ButtonGroup variant="contained" size="medium">
                <Button onClick={() => setPaused(!paused)} >{paused ? "Start" : "Stop"}</Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    );
  }