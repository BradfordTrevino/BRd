/* eslint-disable max-len */
import React, {
  useContext, useState,
} from 'react';
import { getRandomActivity, getActivityByTypeAndParticipants, getAllRecentActivities } from '../../helpers';
import { AppContext } from '../context/AppContext';
import '../styles/Form.css';

function Form() {
  const {
    type,
    setType,
    participants,
    setParticipants,
    setActivity,
  } = useContext(AppContext);

  const [noActivity, setNoActivity] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  const handleSubmitClick = () => {
    getActivityByTypeAndParticipants(type, participants)
      .then((response) => {
        if (response.error) {
          setNoActivity(true);
          setActivity('');
        } else {
          setNoActivity(false);
          setActivity(response);
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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowAllClick = () => {
    getAllRecentActivities()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'type-selector') {
      setType(e.target.value);
    }
    if (e.target.id === 'participant-selector') {
      setParticipants(e.target.value);
    }
  };

  const handleTypeChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
    setShowParticipants(true);
  };

  const types = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];

  return (
    <div className="form-container">
      <div className="logo-container">
        <h1>BRd</h1>
      </div>

      <select
        id="type-selector"
        onChange={(e) => handleTypeChange(e)}
      >
        <option value="" disabled selected hidden>TYPE</option>
        {types.map((activityType) => <option key={activityType} value={activityType}>{activityType.toUpperCase()}</option>)}
      </select>

      { showParticipants
        ? (
          <select
            id="participant-selector"
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled selected hidden>PARTICIPANTS</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        )
        : null}

      <div className="button-container">
        <button
          type="submit"
          onClick={handleSubmitClick}
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

      <button
        type="submit"
        className="show-all"
        onClick={handleShowAllClick}
      >
        SHOW RECENT ACTIVITIES
      </button>

      { noActivity
        ? <span className="no-activity">No activites found with these parameters!</span>
        : null }

    </div>
  );
}

export default Form;
