import React from 'react';
import CustomText from '../CustomText';
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
      <CustomText style={styles.button}>{props.children}</CustomText>
    </LinearGradient>
  );
};

export default Button;
