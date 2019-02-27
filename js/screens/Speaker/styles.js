import { StyleSheet } from 'react-native';
import {
  center,
  colors,
  heading,
  padding,
  paragraph,
  margin,
  subtitle
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: colors.bgDark,
    flex: 1
  },
  modal: {
    backgroundColor: colors.bgLight,
    margin: margin.md,
    marginTop: margin.lg,
    borderRadius: 10,
    flex: 1
  },
  titleWrapper: { flexDirection: 'row', marginTop: margin.lg * 2 },
  subtitle: { ...subtitle, color: colors.bgLight, textAlign: 'center' },
  center: { ...center, paddingTop: padding.md },
  heading: { ...heading, paddingVertical: padding.md },
  paragraph: { ...paragraph, paddingHorizontal: padding.md }
});

export default styles;
