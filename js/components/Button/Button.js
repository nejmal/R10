import React from 'react';
import Text from '../Text';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Button = props => {
  return (
    <LinearGradient
      colors={['#8797d6', '#9963ea']}
      start={{ x: 1.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      style={styles.linearGradient}
    >
      <Text style={styles.button}>{props.children}</Text>
    </LinearGradient>
  );
};

export default Button;
