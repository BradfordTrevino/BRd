import axios from 'axios';

const host = 'http://localhost:3100';

const getRandomActivity = () => axios
  .get(`${host}/activity/`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

const getActivityByType = (type) => axios
  .get(`${host}/activity?type=${type}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

const getActivityByTypeAndParticipants = (type, participants) => axios
  .get(`${host}/activity?type=${type}&participants=${participants}`)
  .then((response) => response.data)
  .catch((error) => console.error(error));

export { getRandomActivity, getActivityByType, getActivityByTypeAndParticipants };
