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
  padding
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
  black: { ...black }
});

export default styles;
