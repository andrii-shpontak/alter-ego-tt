import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Box, Button, FormControl, MenuItem, Select, Stack, Toolbar } from '@mui/material/';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  Home,
  Newspaper,
  Login,
  AccountBox,
  Language,
  DarkMode,
  LightMode,
} from '@mui/icons-material/';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { styles } from './style';
import { setLanguage } from '../../store/slice';
import LogIn from '../logIn';
import Loader from '../loader';
import { INavbarProps, IState } from '../../types';
import { useTranslation } from 'react-i18next';

const NavBar: React.FC<INavbarProps> = ({ mode, chandeMode }) => {
  const { t } = useTranslation();
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
        <LogIn setPopup={setPopup} mode={mode} />
      </CSSTransition>
      <AppBar position="static">
        <Toolbar sx={styles.toolbar}>
          <Stack sx={styles.pages}>
            <Link to="/alter-ego-tt/" style={styles.navbarLink}>
              <Button sx={styles.buttonSm} startIcon={<Home />}>
                {t('navbar.main')}
              </Button>
              <Home sx={styles.iconXs} />
            </Link>
            <Link to="/alter-ego-tt/news" style={styles.navbarLink}>
              <Button sx={styles.buttonSm} startIcon={<Newspaper />}>
                {t('navbar.news')}
              </Button>
              <Newspaper sx={styles.iconXs} />
            </Link>
          </Stack>

          <Stack sx={styles.language}>
            {(auth && (
              <Link to="/alter-ego-tt/profile" style={styles.navbarLink}>
                <Button sx={styles.buttonSm} startIcon={<AccountBox />}>
                  {t('navbar.profile')}
                </Button>
                <AccountBox sx={styles.iconXs} />
              </Link>
            )) ||
              (!auth && (
                <>
                  <Button sx={styles.buttonSm} startIcon={<Login />} onClick={() => setPopup(true)}>
                    {t('navbar.login')}
                  </Button>
                  <Login sx={styles.login} onClick={() => setPopup(true)} />
                </>
              ))}
            <Language fontSize="small" />
            <FormControl variant="standard">
              <Select
                sx={styles.select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleLanguageChange}>
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'ua'}>Українська</MenuItem>
              </Select>
            </FormControl>
            {mode ? (
              <DarkMode sx={styles.mode} onClick={chandeMode} />
            ) : (
              <LightMode sx={styles.mode} onClick={chandeMode} />
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {isLoading && <Loader />}
    </Box>
  );
};

export default React.memo(NavBar);
