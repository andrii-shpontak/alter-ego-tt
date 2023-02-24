import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Box, FormControl, MenuItem, Select, Stack, Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Home, Newspaper, Login, AccountBox, Language } from '@mui/icons-material/';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { styles } from './style';
import { setLanguage } from '../../store/slice';
import LogIn from '../logIn';
import Loader from '../loader';
import { IState } from '../../types';

const NavBar = () => {
  const dispatch = useDispatch();
  const language: string = useSelector((state: IState) => state?.languge);
  const auth: boolean = useSelector((state: IState) => state?.isAuth);
  const isLoading: boolean = useSelector((state: IState) => state?.isLoading);
  const [popup, setPopup] = useState(false);

  if (popup) {
    disablePageScroll();
  } else {
    enablePageScroll();
  }

  const handleLanguageChange = () => {
    dispatch(setLanguage());
  };

  return (
    <Box sx={styles.box}>
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
              (!auth && <Login sx={styles.login} onClick={() => setPopup(true)} />)}
          </Stack>

          <Stack sx={styles.language}>
            <Language />
            <FormControl variant="standard">
              <Select
                sx={styles.select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleLanguageChange}>
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'ua'}>Ukraine</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Toolbar>
      </AppBar>
      {isLoading && <Loader />}
    </Box>
  );
};

export default React.memo(NavBar);
