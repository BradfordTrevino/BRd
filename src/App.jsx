import React from 'react';
import Form from './components/Form';
import './App.css';
import { AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <Form />
    </AppContextProvider>
  );
}

export default App;
