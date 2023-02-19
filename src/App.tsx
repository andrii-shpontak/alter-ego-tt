import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorMessage from './components/errorMessage';
import LogIn from './components/logIn';
import NavBar from './components/NavBar';
import MainPage from './pages/Main';
import NewsPage from './pages/News';
import ProfilePage from './pages/Profile';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/alter-ego-tt/" element={<MainPage />} />
        <Route path="/alter-ego-tt/news" element={<NewsPage />} />
        <Route path="/alter-ego-tt/profile" element={<ProfilePage />} />
        <Route path="/alter-ego-tt/login" element={<LogIn />} />
        <Route path="/alter-ego-tt/*" element={<ErrorMessage />} />
      </Routes>
    </>
  );
}

export default App;
