import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import img from './error.gif';

const ErrorMessage = () => {
  return (
    <Box padding={2}>
      <Typography variant="h6" align="center">
        Page is not found <br />
        Please <Link to="/alter-ego-tt/">return to Main page</Link>
      </Typography>
      <img
        style={{
          display: 'block',
          maxWidth: '100%',
          height: '70vh',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        src={img}
        alt="Error"
      />
    </Box>
  );
};

export default ErrorMessage;
