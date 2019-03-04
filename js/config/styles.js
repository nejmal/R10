// for shared styles (typography, colours, etc.)
import { Dimensions, Platform } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#000000',
  neutral: '#666666',
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

// export const black = {
//   ...Platform.select({
//     ios: { color: colors.primary },
//     android: { color: 'red' }
//   })
// };

export const greyAblackI = {
  ...Platform.select({
    ios: { color: colors.primary },
    android: { color: colors.neutral }
  })
};

export const center = { justifyContent: 'center', alignItems: 'center' };

export const row = { flexDirection: 'row' };

export const jusCenterRow = {
  ...row,
  justifyContent: 'center'
};

export const iteCenterRow = {
  ...row,
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
  xxs: 12,
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
  // marginVertical: margin.sm / 2,
  ...Platform.select({
    ios: { marginVertical: margin.sm / 2 },
    android: { marginVertical: margin.sm / 3 }
  })
};

export const hr = {
  height: 1,
  backgroundColor: colors.neutralLight,
  marginVertical: margin.sm * 1.7
};

export const h1 = {
  // fontSize: fonts.xl,
  ...Platform.select({
    ios: {
      paddingVertical: padding.md,
      fontWeight: fonts.bold,
      fontSize: fonts.xl
    },
    android: {
      paddingVertical: padding.xxxs,
      fontFamily: fonts.secondary,
      fontSize: fonts.lg
    }
  })
};

export const h2 = {
  // fontSize: fonts.lg,
  ...Platform.select({
    ios: {
      paddingVertical: padding.md,
      fontWeight: fonts.bold,
      fontSize: fonts.lg
    },
    android: {
      paddingVertical: padding.sm,
      fontFamily: fonts.secondary,
      fontSize: fonts.md
    }
  })
};

export const subheading = {
  color: colors.brandSecondary,
  paddingVertical: padding.xs,
  ...Platform.select({
    ios: { fontWeight: fonts.bold },
    android: { fontFamily: fonts.secondary }
  })
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
  // fontSize: fonts.xs,
  // fontWeight: fonts.bold,
  ...Platform.select({
    ios: { fontWeight: fonts.bold, fontSize: fonts.xs },
    android: { fontFamily: fonts.secondary, fontSize: fonts.xxs }
  })
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
