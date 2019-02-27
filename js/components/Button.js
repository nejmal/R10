import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

// create gradient header
export const GradientButton = props => (
  <LinearGradient
    colors={['#cf392a', '#9963ea']}
    start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 0.0 }}
    style={[StyleSheet.absoluteFill, { height: '100%', width: '100%' }]}
  />
);
