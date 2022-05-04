import React, { useContext } from 'react';
import Form from './components/Form';
import Activity from './components/Activity';
import './styles/App.css';
import { AppContext, AppContextProvider } from './context/AppContext';

function App() {
  const {
    activity,
  } = useContext(AppContext);

  return (
    <AppContextProvider>
      <div className="app-container">
        <Form />
        { activity
          ? null
          : <Activity /> }
      </div>
    </AppContextProvider>
  );
}

export default App;
