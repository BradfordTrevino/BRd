/* eslint-disable max-len */
import React, {
  useContext, useState,
} from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
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
  const [favorite, setFavorite] = useState(false);

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
          setFavorite(false);
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
          setFavorite(false);
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

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    if (!favorite) {
      sessionStorage.setItem(activity.key, activity.activity);
      document.getElementById('show-favorites').classList.remove('disabled');
    } else {
      sessionStorage.removeItem(activity.key);
    }
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
        <p className="description">
          Your daily activity finder
        </p>
      </div>

      <select
        id="type-selector"
        onChange={(e) => handleTypeChange(e)}
        defaultValue="TYPE"
      >
        <option value="TYPE" disabled hidden className="default">SELECT TYPE</option>
        {types.map((activityType) => <option key={activityType} value={activityType}>{activityType.toUpperCase()}</option>)}
      </select>

      { showParticipants
        ? (
          <select
            id="participant-selector"
            onChange={(e) => handleParticipantChange(e)}
            defaultValue="PARTICIPANTS"
          >
            <option value="PARTICIPANTS" disabled hidden className="default">SELECT # OF PARTICIPANTS</option>
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
          className="submit disabled"
        >
          SUBMIT
        </button>

        <button
          type="submit"
          onClick={handleRandomClick}
          className="surprise"
        >
          RANDOM
        </button>
      </div>

      { activity
        ? (
          <div className="favorites-button-container">
            <button
              id="show-favorites"
              type="submit"
              className={`show-favorites ${Object.keys(sessionStorage).length > 0}`}
              onClick={handleShowAllClick}
            >
              SHOW FAVORITES
            </button>
            <button
              type="submit"
              className="favorite"
              onClick={handleFavoriteClick}
            >
              { favorite
                ? <MdOutlineFavorite />
                : <MdOutlineFavoriteBorder /> }
            </button>
          </div>
        )
        : null }

      { noActivity
        ? <span className="no-activity">No activities found with these parameters!</span>
        : null }

    </div>
  );
}

export default Form;
