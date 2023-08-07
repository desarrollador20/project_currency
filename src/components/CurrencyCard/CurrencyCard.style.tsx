import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    marginHorizontal: normalize(20, 'height'),
    marginTop: normalize(20, 'width'),
    backgroundColor: '#E7DFDE',
    padding: normalize(20, 'width'),
    borderRadius: 20,
    height: normalize(90, 'width'),
  },
  rowCard: {
    flexDirection: 'row',
    marginTop: normalize(5, 'height'),
    alignItems: 'center',
  },
  rowCardTitles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconExChange: {
    paddingHorizontal: normalize(5, 'width'),
  },
  title: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
  },

  symbol: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
  },
  price: {
    fontSize: RFPercentage(2),
  },
});
