import React, {
  createContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [type, setType] = useState('education');
  const [participants, setParticipants] = useState('1');
  const [activity, setActivity] = useState(null);

  const AppContextValues = useMemo(() => ({
    type,
    setType,
    participants,
    setParticipants,
    activity,
    setActivity,
  }));

  return (
    <AppContext.Provider value={AppContextValues}>
      { children }
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
