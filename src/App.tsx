import { Routes, Route } from 'react-router-dom';

import ErrorMessage from './components/errorMessage';
import NavBar from './components/navBar';
import MainPage from './pages/main';
import NewsPage from './pages/news';
import ProfilePage from './pages/profile';
import PrivateRoute from './utils/router/PrivateRoute';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/alter-ego-tt/" element={<MainPage />} />
        <Route path="/alter-ego-tt/news" element={<NewsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/alter-ego-tt/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/alter-ego-tt/*" element={<ErrorMessage />} />
      </Routes>
    </div>
  );
}

export default App;
