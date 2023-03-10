import { useCallback, useMemo, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ErrorMessage from './components/errorMessage';
import NavBar from './components/navBar';
import PrivateRoute from './utils/router/PrivateRoute';

const MainPage = lazy(() => import('./pages/main'));
const NewsPage = lazy(() => import('./pages/news'));
const ProfilePage = lazy(() => import('./pages/profile'));

const getMode =
  localStorage.getItem('mode') !== null ? JSON.parse(localStorage.getItem('mode')!) : false;

function App() {
  const [darkMode, setDarkMode] = useState(getMode);

  const myTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <div className="app">
        <NavBar mode={darkMode} chandeMode={() => setDarkMode(!darkMode)} />
        <Suspense>
          <Routes>
            <Route path="/alter-ego-tt/" element={<MainPage mode={darkMode} />} />
            <Route path="/alter-ego-tt/news" element={<NewsPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/alter-ego-tt/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/alter-ego-tt/*" element={<ErrorMessage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
