import { StyleSheet } from 'react-native';
import { iteCenterRow, margin, subheading } from '../../config/styles';

const styles = StyleSheet.create({
  conduct: { ...iteCenterRow },
  subheading: {
    ...subheading,
    marginLeft: margin.sm
  }
});

export default styles;
