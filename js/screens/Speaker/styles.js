import { StyleSheet, Platform } from 'react-native';
import {
  center,
  colors,
  h1,
  padding,
  paragraph,
  margin,
  subtitle,
  button,
  dimensions
} from '../../config/styles';

// define your styles
const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: colors.bgDark,
    flex: 1
  },
  modal: {
    backgroundColor: colors.bgLight,
    // margin: margin.sm * 1.5,
    marginTop: margin.lg,
    borderRadius: 10,
    flex: 1,
    height: dimensions.fullHeight,
    ...Platform.select({
      ios: { margin: margin.sm * 1.5 },
      android: { margin: margin.sm / 2 }
    })
  },
  titleWrapper: {
    flexDirection: 'row',
    // marginTop: margin.lg * 2,
    justifyContent: 'center',
    ...Platform.select({
      ios: { marginTop: margin.lg * 2 },
      android: { marginTop: margin.lg * 1.5 }
    })
  },
  close: {
    ...Platform.select({
      ios: { marginLeft: margin.md },
      android: { marginLeft: margin.sm }
    })
  },
  grow: { flex: 1 },
  subtitle: { ...subtitle, color: colors.bgLight, marginRight: 30 },
  center: { ...center, paddingTop: padding.md },
  h1: { ...h1, paddingVertical: padding.md },
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
