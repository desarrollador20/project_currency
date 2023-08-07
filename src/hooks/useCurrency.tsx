import {useState, useEffect} from 'react';
import currencyDB from '../api/CurrencyDB';
import {Currency, ListCurrencyResponse} from '../interface/Currency';

interface CurrencyState {
  dataCurrency: Currency[];
}

export const useCurrency = () => {
  const [currencyState, setCurrencyState] = useState<CurrencyState>({
    dataCurrency: [],
  });
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSearch = async (dataSearch: any) => {
    setSearch(dataSearch);
    const dataCurrencyPromise = await currencyDB.get<ListCurrencyResponse>(
      '/tickers',
    );

    const filteredObj = Object.fromEntries(
      Object.entries(dataCurrencyPromise.data.data).filter(([key, value]) =>
        value.name.toLowerCase().includes(dataSearch.toLowerCase()),
      ),
    );
    const CurrencyResultFilter = Object.values(filteredObj);
    setCurrencyState({
      dataCurrency: [...CurrencyResultFilter],
    });
  };

  const getCurrency = async () => {
    const dataCurrencyPromise = await currencyDB.get<ListCurrencyResponse>(
      '/tickers',
    );

    setCurrencyState({
      dataCurrency: dataCurrencyPromise.data.data,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return {
    ...currencyState,
    setCurrencyState,
    search,
    setSearch,
    isLoading,
    onChangeSearch,
  };
};
