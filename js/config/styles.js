// for shared styles (typography, colours, etc.)
import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  // primary: '#000000',
  neutralLight: '#e6e6e6', // light grey
  neutralDark: '#999999', // med grey
  brandPrimary: '#cf392a', // red
  brandSecondary: '#9963ea', // purple
  accent: '#8797d6', // blue
  bgLight: '#ffffff',
  bgDark: '#000000'
};

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28
  // primary: 'Cochin'
};

export const container = {
  flex: 1,
  backgroundColor: colors.bgLight,
  marginTop: margin.lg * 2,
  padding: padding.md
};

export const separator = {
  height: 1,
  backgroundColor: colors.neutralLight,
  marginVertical: 10
};

export const heading = {
  fontSize: fonts.lg,
  paddingVertical: padding.sm
};

export const subheading = {
  color: colors.brandSecondary,
  paddingVertical: padding.sm
};
