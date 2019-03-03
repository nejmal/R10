import { StyleSheet } from 'react-native';
import { loader, h1, center, padding } from '../../config/styles';

const styles = StyleSheet.create({
  loader: { ...loader },
  container: {
    ...center,
    flex: 1
  },
  h1: { ...h1, padding: padding.lg }
});

export default styles;
