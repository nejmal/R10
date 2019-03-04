import { StyleSheet } from 'react-native';
import {
  margin,
  container,
  h2,
  subheading,
  center,
  pb,
  hr,
  loader
} from '../../config/styles';

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
  h2: {
    ...h2
  },
  subheading: {
    ...subheading,
    marginLeft: margin.sm
  },
  center: { ...center },
  pb: { ...pb }
});

export default styles;
