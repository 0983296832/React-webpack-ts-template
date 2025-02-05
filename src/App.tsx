import React from 'react';
import Image from './assets/images/react.png';
import { Counter } from './Counter';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>
        This is a simple React application. {process.env.NODE_ENV} - {process.env.name}
      </p>
      <p>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <img src={Image} alt='React logo' width={300} height={300} />
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <Counter />
    </div>
  );
};

export default App;
