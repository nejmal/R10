import { StyleSheet } from 'react-native';
import { dimensions, loader } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: dimensions.fullHeight,
    width: dimensions.fullWidth,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  loader: { ...loader }
});

export default styles;
