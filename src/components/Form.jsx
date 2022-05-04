/* eslint-disable max-len */
import React, {
  useContext, useState,
} from 'react';
import { getRandomActivity, getActivityByTypeAndParticipants } from '../../helpers';
import { AppContext } from '../context/AppContext';
import '../styles/Form.css';

function Form() {
  const {
    type,
    setType,
    participants,
    setParticipants,
    activity,
    setActivity,
    setRecentActivities,
    setShowRecentActivities,
  } = useContext(AppContext);

  const [noActivity, setNoActivity] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const handleSubmitClick = () => {
    if (!type) {
      return;
    }
    getActivityByTypeAndParticipants(type, participants)
      .then((response) => {
        if (response.error) {
          setNoActivity(true);
          setActivity('');
        } else {
          setNoActivity(false);
          setActivity(response);
          sessionStorage.setItem(response.key, response.activity);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRandomClick = () => {
    getRandomActivity()
      .then((response) => {
        if (response.error) {
          setNoActivity(true);
          setActivity('');
        } else {
          setNoActivity(false);
          setActivity(response);
          sessionStorage.setItem(response.key, response.activity);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowAllClick = () => {
    setRecentActivities(Object.values(sessionStorage));
    setShowRecentActivities(true);
  };

  const handleTypeChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
    setShowParticipants(true);
    document.getElementById('submit-button').classList.remove('disabled');
  };

  const handleParticipantChange = (e) => {
    e.preventDefault();
    setParticipants(e.target.value);
  };

  const types = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];

  return (
    <div className="form-container animate">
      <div className="logo-container">
        <h1>BRd</h1>
      </div>

      <select
        id="type-selector"
        onChange={(e) => handleTypeChange(e)}
        defaultValue="TYPE"
      >
        <option value="TYPE" disabled hidden className="default">ADD TYPE</option>
        {types.map((activityType) => <option key={activityType} value={activityType}>{activityType.toUpperCase()}</option>)}
      </select>

      { showParticipants
        ? (
          <select
            id="participant-selector"
            onChange={(e) => handleParticipantChange(e)}
            defaultValue="PARTICIPANTS"
          >
            <option value="PARTICIPANTS" disabled hidden className="default">ADD PARTICIPANTS</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        )
        : null}

      <div className="button-container">
        <button
          id="submit-button"
          type="submit"
          onClick={handleSubmitClick}
          className="disabled"
        >
          SUBMIT
        </button>

        <button
          type="submit"
          onClick={handleRandomClick}
        >
          SURPRISE ME
        </button>
      </div>

      { activity
        ? (
          <button
            type="submit"
            className="show-all"
            onClick={handleShowAllClick}
          >
            SHOW RECENT ACTIVITIES
          </button>
        )
        : null }

      { noActivity
        ? <span className="no-activity">No activities found with these parameters!</span>
        : null }

    </div>
  );
}

export default Form;
