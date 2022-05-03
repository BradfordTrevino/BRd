/* eslint-disable max-len */
import React, {
  useContext,
} from 'react';
import { getActivityByType } from '../../helpers';
import { AppContext } from '../context/AppContext';

function Form() {
  const {
    type,
    setType,
    participants,
    setParticipants,
  } = useContext(AppContext);

  const handleButtonClick = () => {
    getActivityByType(type)
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

  const types = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];

  return (
    <div className="form-container">
      <h1>BRd</h1>

      <select
        id="type-selector"
        onChange={(e) => handleInputChange(e)}
      >
        {types.map((activityType) => <option key={activityType} value={activityType}>{activityType.toUpperCase()}</option>)}
      </select>

      <select
        id="participant-selector"
        onChange={(e) => handleInputChange(e)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button
        type="submit"
        onClick={handleButtonClick}
      >
        Submit
      </button>

    </div>
  );
}

export default Form;
