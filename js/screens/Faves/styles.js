import { StyleSheet } from 'react-native';
import { loader, padding, h1, center, colors } from '../../config/styles';

const styles = StyleSheet.create({
  loader: { ...loader },
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    padding: padding.lg
  },
  h1: { ...h1 }
});

export default styles;
