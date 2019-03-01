import { StyleSheet } from 'react-native';
import {
  colors,
  font,
  separator,
  margin,
  padding,
  container,
  heading,
  subheading,
  center,
  pb,
  hr,
  loader,
  centerRow
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  loader: {
    ...loader
  },
  container: {
    ...container
  },
  hr: {
    ...hr
  },
  heading: {
    ...heading
  },
  subheading: {
    ...subheading,
    marginLeft: margin.sm
  },
  center: { ...center },
  pb: { ...pb },
  conduct: { flexDirection: 'row', alignItems: 'center' }
});

export default styles;
