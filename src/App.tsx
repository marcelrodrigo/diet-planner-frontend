import React from 'react';
import './App.css';

import RouterProvider from './RouterProvider';

function App() {
  return (
    <div test-id="react-app">
      <React.StrictMode>
        <RouterProvider />
      </React.StrictMode>
    </div>
  );
}

export default App;
