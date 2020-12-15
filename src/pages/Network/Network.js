import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { List, ListItem, Typography, ListItemText, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2),
  }
}));

function Network() {

  const { data, loading } = useMonitorData();
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className="Network">
            <Typography className={classes.title} variant="h3" align="center">Network</Typography>
            <List>
              {data.network.map((item) =>
              <>
                <ListItem key={item.name}>
                    <ListItemText
                      primary={item.interface}
                      secondary={`Input Bytes: ${item.inputBytes} OutputBytes: ${item.outputBytes}`} />
                  </ListItem>
                  {console.log(item)}
                  <Divider />
              </>
              )}
            </List>
          </div>
        )}
    </div>

  );
}

export default Network;