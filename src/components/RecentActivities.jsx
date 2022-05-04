import React, {
  useContext,
} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/RecentActivities.css';

function RecentActivities() {
  const {
    setActivity,
    recentActivities,
    setShowRecentActivities,
  } = useContext(AppContext);

  const handleBackClick = () => {
    setActivity(null);
    setShowRecentActivities(false);
  };

  return (
    <div className="activities-container">
      { recentActivities.map((activity) => <div key={activity} className="activity">{activity}</div>)}
      <button
        type="submit"
        className="back"
        onClick={handleBackClick}
      >
        BACK
      </button>
    </div>
  );
}

export default RecentActivities;
