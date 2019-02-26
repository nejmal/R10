import { StyleSheet } from 'react-native';
import {
  colors,
  font,
  separator,
  margin,
  padding,
  container,
  heading,
  subheading
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  container: {
    ...container
  },
  separator: {
    ...separator
  },
  heading: {
    ...heading
  },
  subheading: {
    ...subheading
  }
});

export default styles;
