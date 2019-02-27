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
  loader,
  subtitle,
  subtitle2,
  black,
  pb
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  container: { ...container, padding: 0 },
  separator: {
    ...separator
  },
  header: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.xs / 2,
    backgroundColor: colors.neutralLight,
    ...subtitle2
  },
  section: {
    padding: padding.sm
  },
  // title: {
  //   fontSize: fonts.md,
  //   paddingBottom: padding.sm
  // },
  subtitle: { ...subtitle, paddingVertical: 0 },
  black: { ...black },
  pb: { ...pb },
  loader: {
    ...loader
  },
  location: { ...subtitle2, color: colors.neutralDark }
});

export default styles;
