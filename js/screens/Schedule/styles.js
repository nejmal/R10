import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  separator,
  margin,
  padding,
  container,
  heading,
  subheading,
  loader
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  container: { ...container, padding: 0 },
  separator: {
    ...separator
  },
  header: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.sm / 2,
    backgroundColor: colors.neutralLight
  },
  section: {
    padding: padding.sm
  },
  title: {
    fontSize: fonts.md,
    paddingBottom: padding.sm
  },
  location: {
    color: colors.neutralDark
  },
  loader: {
    ...loader
  }
});

export default styles;
