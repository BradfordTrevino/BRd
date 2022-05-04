import React, { useContext } from 'react';
import Form from './components/Form';
import Activity from './components/Activity';
import RecentActivities from './components/RecentActivities';
import { AppContext } from './context/AppContext';
import './styles/App.css';

sessionStorage.clear();

function App() {
  const {
    showRecentActivities,
  } = useContext(AppContext);

  return (
    <div className="app-container">
      { showRecentActivities
        ? <RecentActivities />
        : (
          <div>
            <Form />
            <Activity />
          </div>
        ) }
    </div>
  );
}

export default App;
