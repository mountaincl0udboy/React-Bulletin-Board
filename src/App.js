import React from 'react';
import AdList from './components/AdList';
import { AdsProvider } from './contexts/AdsContext';
import './App.css';

const App = () => {
  return (
    <AdsProvider>
      <div className="container">
        <h1 className="title">Доска объявлений</h1>
        <AdList />
      </div>
    </AdsProvider>
  );
};

export default App;
