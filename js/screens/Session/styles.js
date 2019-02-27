import { StyleSheet } from 'react-native';
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
  margin
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
    paddingVertical: padding.xs
  },
  red: { ...red },
  black: { ...black },
  // FaveButton
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
