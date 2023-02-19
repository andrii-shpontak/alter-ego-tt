import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/';
import { AccountCircle, Login } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { styles } from './style';

const NavBar = () => {
  const [auth, setAuth] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <AppBar position="static">
        <Toolbar sx={styles.toolbar}>
          <Link to="/alter-ego-tt/" style={styles.navbarLink}>
            <Typography variant="h6">Main page</Typography>
          </Link>
          <Link to="/alter-ego-tt/news" style={styles.navbarLink}>
            <Typography variant="h6">News</Typography>
          </Link>
          {(auth && (
            <Link to="/alter-ego-tt/profile" style={styles.navbarLink}>
              <Typography variant="h6">Profile</Typography>
            </Link>
          )) ||
            (!auth && (
              <Link to="/alter-ego-tt/login" style={styles.navbarLink}>
                <Typography variant="h6">LogIn</Typography>
              </Link>
            ))}
          <Typography variant="h6">Language</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
