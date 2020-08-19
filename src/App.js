import React from 'react';
import styles from './App.css';
import Main from './pages/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
