import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  contaierDetail: {
    marginTop: normalize(40, 'height'),
    alignItems: 'center',
  },
  ContainerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: RFPercentage(3),
    marginVertical: normalize(2, 'height'),
  },
  title: {
    fontSize: RFPercentage(4.5),
    fontWeight: 'bold',
  },
  volumen: {
    fontSize: RFPercentage(2),
  },
  iconExChange: {
    paddingHorizontal: normalize(10, 'width'),
  },
  symbol: {
    fontSize: RFPercentage(3),
  },
  containerPercentage: {
    marginTop: normalize(30, 'height'),
    marginBottom: normalize(10, 'height'),
  },
  btnBack: {
    marginTop: normalize(100, 'height'),
  },
});
