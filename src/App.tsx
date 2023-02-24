import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ErrorMessage from './components/errorMessage';
import NavBar from './components/navBar';
import MainPage from './pages/main';
import NewsPage from './pages/news';
import ProfilePage from './pages/profile';
import PrivateRoute from './utils/router/PrivateRoute';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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

        <Routes>
          <Route path="/alter-ego-tt/" element={<MainPage mode={darkMode} />} />
          <Route path="/alter-ego-tt/news" element={<NewsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/alter-ego-tt/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/alter-ego-tt/*" element={<ErrorMessage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
