import { Platform, Dimensions, StyleSheet } from 'react-native';

const deviceTop = Platform.OS === 'android' ? 54 : 64;
const { height } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height - deviceTop,
  },
});
