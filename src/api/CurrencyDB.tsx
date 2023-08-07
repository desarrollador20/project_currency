import axios from 'axios';

const currencyDB = axios.create({
  baseURL: 'https://api.coinlore.net/api',
});

export default currencyDB;
