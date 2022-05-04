import React, {
  useContext,
} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/RecentActivities.css';

function RecentActivities() {
  const {
    recentActivities,
    setShowRecentActivities,
  } = useContext(AppContext);

  const handleBackClick = () => {
    setShowRecentActivities(false);
  };

  return (
    <div className="activities-container">
      { recentActivities.map((activity) => <div key={activity} className="activity">{activity}</div>)}
      <button
        type="submit"
        className="show-all"
        onClick={handleBackClick}
      >
        BACK
      </button>
    </div>
  );
}

export default RecentActivities;
