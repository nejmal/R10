// for shared styles (typography, colours, etc.)
import { StyleSheet, Dimensions, Platform } from 'react-native';

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

export const greyAblackI = {
  ...Platform.select({
    ios: { color: colors.primary },
    android: { color: colors.neutralDark }
  })
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
  xxxs: 2,
  xxs: 6,
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40
};

export const pb = {
  paddingBottom: padding.xs
};

export const pb0 = {
  paddingBottom: 0
};

export const pt0 = {
  paddingTop: 0
};

export const pt1 = {
  ...Platform.select({
    ios: { paddingTop: padding.lg },
    android: { paddingTop: padding.md }
  })
};

export const fonts = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 26,
  xl: 28,
  bold: '500',
  primary: 'Montserrat-Light',
  secondary: 'Montserrat-Regular'
};

export const container = {
  flex: 1,
  backgroundColor: colors.bgLight,
  // padding: padding.md
  ...Platform.select({
    ios: { padding: padding.md },
    android: { padding: padding.md }
  })
};

export const separator = {
  height: 1,
  backgroundColor: colors.neutralLight,
  marginVertical: 5
};

export const heading = {
  fontSize: fonts.lg,
  // paddingVertical: padding.xs,
  // fontWeight: fonts.bold,
  ...Platform.select({
    ios: { paddingVertical: padding.xs, fontWeight: fonts.bold },
    android: { paddingVertical: padding.xxxs, fontFamily: fonts.secondary }
  })
};

export const subheading = {
  color: colors.brandSecondary,
  paddingVertical: padding.xs,
  fontWeight: fonts.bold
};

export const subtitle = {
  color: colors.neutralDark,
  fontSize: fonts.sm,
  // fontWeight: fonts.bold,
  paddingVertical: padding.xs,
  ...Platform.select({
    ios: { fontWeight: fonts.bold },
    android: { fontFamily: fonts.secondary, fontSize: fonts.xs }
  })
};

export const subtitle2 = {
  fontSize: fonts.xs,
  fontWeight: fonts.bold
};

export const loader = {
  flex: 1,
  justifyContent: 'center'
};

export const paragraph = {
  ...Platform.select({
    ios: {
      lineHeight: 30
    },
    android: {
      lineHeight: 20,
      fontSize: fonts.sm
    }
  })
};

export const button = {
  color: colors.bgLight,
  backgroundColor: 'transparent',
  textAlign: 'center',
  // paddingVertical: padding.sm,
  // fontWeight: fonts.bold,
  fontSize: fonts.sm,
  ...Platform.select({
    ios: { fontWeight: fonts.bold, paddingVertical: padding.sm },
    android: { fontFamily: fonts.secondary, paddingVertical: padding.xs }
  })
};
