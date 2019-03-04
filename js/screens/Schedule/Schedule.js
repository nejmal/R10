import React from 'react';
import ConferenceSessions from '../../components/ConferenceSessions';

const Schedule = ({ navigation, data, faveIds }) => {
  return (
    <ConferenceSessions data={data} navigation={navigation} faveIds={faveIds} />
  );
};

export default Schedule;
