import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default ({ name, ...props }) => (
  <Icon
    name={Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`}
    {...props}
  />
);
