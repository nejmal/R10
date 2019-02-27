import { StyleSheet } from 'react-native';
import {
  loader,
  container,
  separator,
  heading,
  colors,
  subtitle,
  paragraph
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
  }
});

export default styles;
