import React from 'react';
import ConferenceSessions from '../../components/ConferenceSessions';

const Faves = props => {
  console.log('DATA', props);

  return <ConferenceSessions {...props} />;
};

export default Faves;
