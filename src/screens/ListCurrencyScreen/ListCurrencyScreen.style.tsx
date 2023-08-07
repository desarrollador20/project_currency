import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  HeaderComponetFlastList: {
    marginTop: normalize(20, 'width'),
    marginHorizontal: normalize(20, 'height'),
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
