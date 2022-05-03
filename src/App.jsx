import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

function App() {
  const getRandomActivity = () => {
    axios.get('/api/activity/')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
