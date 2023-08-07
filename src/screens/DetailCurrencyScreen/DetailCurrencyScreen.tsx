import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';
import {RootStackParams} from '../../navigation/Navigation';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Feather';
import {RowPercentage} from '../../components/RowPercentage/RowPercentage';
import {styles} from './DetailCurrencyScreen.style';
import {useNavigation} from '@react-navigation/native';

interface Props
  extends StackScreenProps<RootStackParams, 'DetailCurrencyScreen'> {}

export const DetailCurrencyScreen = ({route}: Props) => {
  const navigation = useNavigation();
  const currency = route.params;
  return (
    <SafeAreaView>
      <View style={styles.contaierDetail}>
        <Icon style={styles.iconExChange} name="info" color="grey" size={140} />
        <Text style={styles.title}>{currency.name} </Text>
        <Text style={styles.symbol}>{currency.symbol}</Text>
        <View style={styles.ContainerPrice}>
          <Text style={styles.price}>{currency.price_btc}</Text>
          <Icon
            style={styles.iconExChange}
            name="refresh-cw"
            color="green"
            size={20}
          />
          <Text style={styles.price}>
            {currencyFormatter.format(parseFloat(currency.price_usd), {
              code: 'USD',
            })}
          </Text>
        </View>
        <View style={styles.containerPercentage}>
          <RowPercentage
            title="The Last hour "
            value={currency.percent_change_1h}
          />
          <RowPercentage
            title="The Last 24 hours "
            value={currency.percent_change_24h}
          />
          <RowPercentage
            title="The Last 7 days "
            value={currency.percent_change_7d}
          />
        </View>
        <Text style={styles.volumen}>Volume 24: {currency.volume24}</Text>

        <Button
          icon="arrow-left"
          mode="contained"
          buttonColor={'grey'}
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          Back to listing
        </Button>
      </View>
    </SafeAreaView>
  );
};
