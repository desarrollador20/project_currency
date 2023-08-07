import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {CurrencyCard} from '../../components/CurrencyCard/CurrencyCard';
import {useCurrency} from '../../hooks/useCurrency';
import {Currency} from '../../interface/Currency';
import {styles} from './ListCurrencyScreen.style';

const Item = ({data}: {data: Currency}) => <CurrencyCard dataCurrency={data} />;

export const ListCurrencyScreen = () => {
  const {dataCurrency, search, onChangeSearch, isLoading} = useCurrency();

  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }

  const renderItem: ListRenderItem<Currency> = ({item}) => <Item data={item} />;

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <Searchbar
            placeholder="Example: Stellar"
            onChangeText={e => onChangeSearch(e)}
            value={search}
          />
        }
        ListHeaderComponentStyle={styles.HeaderComponetFlastList}
        data={dataCurrency}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
