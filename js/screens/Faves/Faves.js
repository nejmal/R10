import React from 'react';
import { View, SectionList, TouchableHighlight } from 'react-native';
import Text from '../../components/MyAppText.js';
import moment from 'moment';
import { renderSeparator } from '../../lib/helpers/separator';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '../../components/Icon';
import { colors } from '../../config/styles';
import styles from './styles';
import ConferenceSessions from '../../components/ConferenceSessions/index.js';

const Faves = props => {
  // console.log('DATA', data);
  // console.log('faveIds', faveIds);

  return <ConferenceSessions {...props} />;
};

export default Faves;
