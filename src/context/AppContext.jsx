import React, {
  createContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [activity, setActivity] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [showRecentActivities, setShowRecentActivities] = useState(false);

  const AppContextValues = useMemo(() => ({
    type,
    setType,
    participants,
    setParticipants,
    activity,
    setActivity,
    recentActivities,
    setRecentActivities,
    showRecentActivities,
    setShowRecentActivities,
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
