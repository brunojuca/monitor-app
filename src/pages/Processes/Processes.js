import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { List, ListItem, ListItemText, Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2)
  }
}));


function Processes() {

  const { data, loading } = useMonitorData();
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className="Processes">
            <Typography className={classes.title} variant="h3" align="center">Processes</Typography>
            <List>
              {data.processes.map((item, i) =>
                <>
                  <ListItem key={i}>
                    <ListItemText
                      primary={item.name}
                      secondary={`CPU: ${item.cpu}% RAM: ${item.mem}`} />
                  </ListItem>
                  <Divider />
                </>
              )}
            </List>
          </div>
        )}
    </div>
  );
}
export default Processes;