import React from 'react';
import { useMonitorData } from '../../contexts/monitorContext';
import { Loading } from '../';
import { List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

function Processes() {

  const { data, loading } = useMonitorData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
          <div className="Processes">
            <Typography variant="h3" align="center">Processes</Typography>
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