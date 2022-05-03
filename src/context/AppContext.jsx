import React, {
  createContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');

  const AppContextValues = useMemo(() => ({
    type,
    setType,
    participants,
    setParticipants,
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
