import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {useNavigation} from '@react-navigation/native';
import {Currency} from '../../interface/Currency';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './CurrencyCard.style';

interface Props {
  dataCurrency: Currency;
}

export const CurrencyCard = ({dataCurrency}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.containerCard}
      onPress={() => navigation.navigate('DetailCurrencyScreen', dataCurrency)}>
      <View style={styles.rowCardTitles}>
        <Text style={styles.title}>{dataCurrency.name}</Text>
        <Text style={styles.symbol}>{dataCurrency.symbol}</Text>
      </View>
      <View style={styles.rowCard}>
        <Text style={styles.price}>{dataCurrency.price_btc}</Text>
        <Icon
          style={styles.iconExChange}
          name="swap-horizontal-outline"
          color="green"
          size={20}
        />
        <Text style={styles.price}>
          {currencyFormatter.format(parseFloat(dataCurrency.price_usd), {
            code: 'USD',
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
