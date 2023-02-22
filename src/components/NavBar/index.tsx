import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Box, Button, FormControl, MenuItem, Select, Stack, Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Home, Newspaper, Login, AccountBox, Language } from '@mui/icons-material/';

import { styles } from './style';
import { IState, setLanguage } from '../../store/slice';
import LogIn from '../logIn';

const NavBar = () => {
  const dispatch = useDispatch();
  const language: string = useSelector((state: IState) => state?.languge);
  const auth: boolean = useSelector((state: IState) => state?.isAuth);
  const [popup, setPopup] = React.useState(false);

  const handleChange = () => {
    dispatch(setLanguage());
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center', position: 'relative' }}>
      <CSSTransition in={popup} classNames="popup" timeout={500} unmountOnExit>
        <LogIn setPopup={setPopup} />
      </CSSTransition>
      <AppBar position="static">
        <Toolbar sx={styles.toolbar}>
          <Stack sx={styles.pages}>
            <Link to="/alter-ego-tt/" style={styles.navbarLink}>
              <Home />
            </Link>
            <Link to="/alter-ego-tt/news" style={styles.navbarLink}>
              <Newspaper />
            </Link>
            {(auth && (
              <Link to="/alter-ego-tt/profile" style={styles.navbarLink}>
                <AccountBox />
              </Link>
            )) ||
              (!auth && <Login sx={{ cursor: 'pointer' }} onClick={() => setPopup(true)} />)}
          </Stack>
          <Stack sx={styles.language}>
            <Language />
            <FormControl variant="standard">
              <Select
                sx={{ color: 'white' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'ua'}>Ukraine</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
