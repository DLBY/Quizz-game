import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from 'styles/app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hogwarts Quizz</h1>
    </div>
  );
}

export default App;
