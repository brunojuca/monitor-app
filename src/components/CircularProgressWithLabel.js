import {CircularProgress, Typography, Box} from '@material-ui/core';


export default function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress size={100} variant="static" value={100} color="secondary" />
        </Box>
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Typography variant="h5" component="div">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
        <CircularProgress size={100} variant="static" {...props} />
      </Box>
    );
  }