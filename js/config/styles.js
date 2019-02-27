// for shared styles (typography, colours, etc.)
import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#000000',
  neutralLight: '#e6e6e6', // light grey
  neutralDark: '#999999', // med grey
  brandPrimary: '#cf392a', // red
  brandSecondary: '#9963ea', // purple
  accent: '#8797d6', // blue
  bgLight: '#ffffff',
  bgDark: '#000000'
};

export const red = {
  color: colors.brandPrimary
};

export const black = {
  color: colors.primary
};

export const center = { justifyContent: 'center', alignItems: 'center' };

export const centerRow = {
  flexDirection: 'row',
  justifyContent: 'center'
};

export const centerCol = {
  alignItems: 'center'
};

export const margin = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const padding = {
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40
};

export const pb = {
  paddingBottom: padding.xs
};

export const fonts = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 26,
  xl: 28,
  bold: '500'
};

export const container = {
  flex: 1,
  backgroundColor: colors.bgLight,
  padding: padding.md
};

export const separator = {
  height: 1,
  backgroundColor: colors.neutralLight,
  marginVertical: 5
};

export const heading = {
  fontSize: fonts.lg,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subheading = {
  color: colors.brandSecondary,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subtitle = {
  color: colors.neutralDark,
  paddingVertical: padding.xs,
  fontSize: fonts.sm,
  fontWeight: fonts.bold
};

export const subtitle2 = {
  fontSize: fonts.xs,
  fontWeight: fonts.bold
};

export const loader = {
  flex: 1,
  justifyContent: 'center'
};

export const paragraph = { lineHeight: 30 };

export const button = {
  // borderRadius: 20
  color: colors.bgLight,
  backgroundColor: 'transparent',
  textAlign: 'center',
  // marginVertical: margin.sm,
  paddingVertical: padding.sm,
  fontWeight: fonts.bold,
  fontSize: fonts.sm
};
