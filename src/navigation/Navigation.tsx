import {createStackNavigator} from '@react-navigation/stack';
import {Currency} from '../interface/Currency';
import {DetailCurrencyScreen} from '../screens/DetailCurrencyScreen/DetailCurrencyScreen';
import {ListCurrencyScreen} from '../screens/ListCurrencyScreen/ListCurrencyScreen';

export type RootStackParams = {
  ListCurrencyScreen: undefined;
  DetailCurrencyScreen: Currency;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="ListCurrencyScreen" component={ListCurrencyScreen} />
      <Stack.Screen
        name="DetailCurrencyScreen"
        component={DetailCurrencyScreen}
      />
    </Stack.Navigator>
  );
};
