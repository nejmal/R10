import { StyleSheet } from 'react-native';
import {
  colors,
  separator,
  padding,
  container,
  subtitle,
  subtitle2,
  greyAblackI,
  pb,
  jusCenterRow
} from '../../config/styles';

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
  subtitle: { ...subtitle, paddingVertical: 0 },
  greyAblackI: { ...greyAblackI },
  pb: { ...pb },
  locationWrapper: { ...jusCenterRow, justifyContent: 'space-between' },
  location: { ...subtitle2, color: colors.neutralDark }
});

export default styles;
