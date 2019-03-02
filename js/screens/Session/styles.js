import { StyleSheet, Platform } from 'react-native';
import {
  loader,
  container,
  separator,
  h1,
  subtitle,
  paragraph,
  red,
  padding,
  button,
  margin,
  pt0,
  pt1,
  pb0,
  greyAblackI,
  iteCenterRow
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  loader: {
    ...loader
  },
  container: {
    ...container
  },
  locationWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  subtitle: {
    ...subtitle
  },
  pt0: { ...pt0 },
  pt1: { ...pt1 },
  pb0: { ...pb0 },
  h1: { ...h1 },
  separator: {
    ...separator
  },
  paragraph: {
    ...paragraph
  },
  speaker: {
    ...iteCenterRow,
    ...Platform.select({
      ios: { paddingVertical: padding.sm },
      android: { paddingVertical: padding.xs }
    })
  },
  red: { ...red },
  speakerName: { ...greyAblackI },
  linearGradient: {
    borderRadius: 50,
    marginVertical: margin.md,
    marginHorizontal: margin.lg * 2
  },
  button: { ...button }
  //
});

export default styles;
