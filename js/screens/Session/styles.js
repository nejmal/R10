import { StyleSheet, Platform } from 'react-native';
import {
  loader,
  container,
  separator,
  heading,
  colors,
  subtitle,
  paragraph,
  red,
  black,
  padding,
  button,
  margin,
  pt0,
  pt1,
  pb0
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
  heart: {
    ...Platform.select({
      ios: {},
      android: {}
    })
  },
  heading: { ...heading },
  separator: {
    ...separator
  },
  paragraph: {
    ...paragraph
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: padding.sm,
    ...Platform.select({
      ios: { paddingVertical: padding.sm },
      android: { paddingVertical: padding.xs }
    })
  },
  red: { ...red },
  // black: { ...black },
  // FaveButton
  speakerName: {},
  linearGradient: {
    // flex: 1,
    borderRadius: 50,
    marginVertical: margin.md,
    marginHorizontal: margin.lg * 2
  },
  button: { ...button }
  //
});

export default styles;
