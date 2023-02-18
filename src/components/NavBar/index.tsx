import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material/';
import { AccountCircle, Login } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { styles } from './style';

const NavBar = () => {
  const [auth, setAuth] = React.useState(true);

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
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setAuth(!auth)}
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          )) ||
            (!auth && (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setAuth(!auth)}
                color="inherit">
                <Login />
              </IconButton>
            ))}
          <Typography variant="h6">Language</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
