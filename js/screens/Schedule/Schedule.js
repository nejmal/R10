import React from 'react';
import ConferenceSessions from '../../components/ConferenceSessions';

const Schedule = ({ navigation, data, faveIds }) => {
  // console.log('Schedule', data);

  return (
    <ConferenceSessions data={data} navigation={navigation} faveIds={faveIds} />
  );
};

export default Schedule;
