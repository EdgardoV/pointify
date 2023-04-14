import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsStack from './ProductsStack';
import {AppStackParams} from 'utils';

const Stack = createNativeStackNavigator<AppStackParams>();

const AppStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="ProductsStack">
    <Stack.Screen name="ProductsStack" component={ProductsStack} />
  </Stack.Navigator>
);

export default AppStack;
