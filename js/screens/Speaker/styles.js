import { StyleSheet } from 'react-native';
import {
  center,
  colors,
  heading,
  padding,
  paragraph,
  margin,
  subtitle,
  button,
  centerRow
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: colors.bgDark,
    flex: 1
  },
  modal: {
    backgroundColor: colors.bgLight,
    margin: margin.sm * 1.5,
    marginTop: margin.lg,
    borderRadius: 10,
    flex: 1
  },
  titleWrapper: {
    flexDirection: 'row',
    marginTop: margin.lg * 2,
    justifyContent: 'center'
  },
  grow: { flex: 1 },
  subtitle: { ...subtitle, color: colors.bgLight, marginRight: 30 },
  center: { ...center, paddingTop: padding.md },
  heading: { ...heading, paddingVertical: padding.md },
  paragraph: { ...paragraph, paddingHorizontal: padding.md },
  // button
  linearGradient: {
    borderRadius: 50,
    marginVertical: margin.md,
    marginHorizontal: margin.lg * 1.5
  },
  button: { ...button }
});

export default styles;
