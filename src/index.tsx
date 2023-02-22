import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';
import { store } from './store/store';

const currentLanguage = localStorage.getItem('language') || 'en';

// Localisation
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ua'],
    fallbackLng: currentLanguage,
    debug: false,
    detection: {
      order: ['cookie', 'localStorage', 'httpTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>loading...</div>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
);
