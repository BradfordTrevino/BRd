import React, {
  useContext,
} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Activity.css';

function Activity() {
  const {
    activity,
  } = useContext(AppContext);

  if (!activity) {
    return <div />;
  }

  return (
    <div className="activity-container">
      <div className="activity-name">
        {activity.activity}
      </div>
      <div className="details-container">
        <div className="accessibility-container">
          <div className="accessibility" style={{ width: `${activity.accessibility * 100}%` }} />
        </div>
        <span className="detail">Accessibility</span>
        <div className="price-container">
          <div className="price" style={{ width: `${activity.price * 100}%` }} />
        </div>
        <span className="detail">Price</span>
      </div>
    </div>
  );
}

export default Activity;
