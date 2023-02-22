import { Routes, Route } from 'react-router-dom';

import ErrorMessage from './components/errorMessage';
import NavBar from './components/NavBar';
import MainPage from './pages/Main';
import NewsPage from './pages/News';
import ProfilePage from './pages/Profile';
import PrivateRoute from './utils/router/PrivateRoute';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/alter-ego-tt/" element={<MainPage />} />
        <Route path="/alter-ego-tt/news" element={<NewsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/alter-ego-tt/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/alter-ego-tt/*" element={<ErrorMessage />} />
      </Routes>
    </>
  );
}

export default App;
